'use strict'

const Sentry = require('@sentry/node')
const https = require('https')
const crypto = require('crypto')

const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_API_DOMAIN = 'us20.api.mailchimp.com'
const MAILCHIMP_API_MEMBER_PATH = `/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`
const MAILCHIMP_API_HEADERS = {
  'Content-type': 'application/json',
  Authorization: `apikey ${MAILCHIMP_API_KEY}`,
}
const MAILCHIMP_MEMBER_URL = 'https://us20.admin.mailchimp.com/lists/members/view'
const SLACK_TOKEN = process.env.SLACK_TOKEN
const SLACK_SIGNUP_NOTIFICATION_CHANNEL = process.env.SLACK_SIGNUP_NOTIFICATION_CHANNEL

const acceptableOrigins = [
  'http://localhost:3000',
  'https://develop--climate-action.netlify.app',
  'https://climate-action.netlify.app',
  'https://hiveinitiative.org',
]

Sentry.init({
  dsn: 'https://4eb2ea14535448ef8f57c0bb353fdf6b@o348233.ingest.sentry.io/2205690',
})

function sentryHandler(lambdaHandler) {
  return (event, context, callback) => {
    try {
      return lambdaHandler(event, context, callback)
    } catch (error) {
      Sentry.captureException(error)
      Sentry.flush(2000)
      throw error
    }
  }
}

exports.handler = sentryHandler((event, context, callback) => {
  const headers = {}
  if (acceptableOrigins.includes(event.headers.origin)) {
    headers['Access-Control-Allow-Origin'] = event.headers.origin
  } else {
    console.info('Origin is not acceptable.')
  }
  let userData
  try {
    userData = JSON.parse(event.body)
  } catch (e) {
    return callback(e, {
      statusCode: 400,
      headers: headers,
      body: e.message,
    })
  }
  const runConfig = {
    disableSlack: event.queryStringParameters.disableSlack === 'true',
    disableMailchimp: event.queryStringParameters.disableMailchimp === 'true',
  }
  // console.log('runConfig', runConfig)
  run(userData, runConfig)
    .then(data => {
      callback(null, {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify(data),
      })
    })
    .catch(callback)
})

async function run(userData, runConfig) {
  try {
    let returnValue = 'Success'
    let webId = ''
    if (!runConfig.disableMailchimp) {
      const mailchimpResponse = await addToMailchimp(userData)
      // console.log('mailchimpResponse', mailchimpResponse)
      const mailchimpJson = JSON.parse(mailchimpResponse)
      returnValue = mailchimpJson.status
      webId = mailchimpJson.web_id
      const mailchimpTagResponse = await tagSubscriber(userData)
      // console.log('mailchimpTagResponse', mailchimpTagResponse)
    }
    if (!runConfig.disableSlack && webId) {
      await sendSlackMessage(
        `A new person has joined the Hive Initiative!\nDetails in Mailchimp here:\n${MAILCHIMP_MEMBER_URL}?id=${webId}`,
      )
    }
    return Promise.resolve({
      msg: returnValue,
    })
  } catch (e) {
    return Promise.reject(e)
  }
}

async function sendSlackMessage(message) {
  return new Promise((resolve, reject) => {
    const slackMessage = {
      channel: SLACK_SIGNUP_NOTIFICATION_CHANNEL,
      text: message,
    }
    // console.log('sendSlackMessage', slackMessage)
    const req = doHttpRequest(
      {
        host: 'slack.com',
        path: '/api/chat.postMessage',
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${SLACK_TOKEN}`,
        },
      },
      resolve,
      reject,
    )
    req.write(JSON.stringify(slackMessage))
    req.end()
  })
}

async function addToMailchimp(userData) {
  return new Promise((resolve, reject) => {
    const emailHash = getEmailHash(userData.EMAIL)
    const jsonData = {
      email_address: userData.EMAIL,
      status: 'subscribed',
      merge_fields: {
        MOTIVATION: userData.ABOUT || undefined,
      },
    }
    if (userData.NAME) {
      const names = userData.NAME.split(' ')
      const lastName = names.pop()
      jsonData.merge_fields.NAME = userData.NAME
      jsonData.merge_fields.FNAME = names.join(' ')
      jsonData.merge_fields.LNAME = lastName
    }
    // console.log('addToMailchimp', jsonData)
    // https://mailchimp.com/developer/marketing/api/list-members/add-or-update-list-member/
    const req = doHttpRequest(
      {
        host: MAILCHIMP_API_DOMAIN,
        path: `${MAILCHIMP_API_MEMBER_PATH}/${emailHash}`,
        method: 'PUT',
        headers: MAILCHIMP_API_HEADERS,
      },
      resolve,
      reject,
    )
    req.write(JSON.stringify(jsonData))
    req.end()
  })
}

async function tagSubscriber(userData) {
  return new Promise((resolve, reject) => {
    const emailHash = getEmailHash(userData.EMAIL)
    const jsonData = {
      tags: [{
        name: 'Ambassador',
        status: 'active'
      }]
    }
    // console.log('updateListMemberTags', jsonData)
    // https://mailchimp.com/developer/marketing/guides/organize-contacts-with-tags/#label-a-contact-with-a-tag
    const req = doHttpRequest(
      {
        host: MAILCHIMP_API_DOMAIN,
        path: `${MAILCHIMP_API_MEMBER_PATH}/${emailHash}/tags`,
        method: 'POST',
        headers: MAILCHIMP_API_HEADERS,
      },
      resolve,
      reject,
    )
    req.write(JSON.stringify(jsonData))
    req.end()
  })
}

function getEmailHash(email) {
  return crypto
    .createHash('md5')
    .update(email)
    .digest('hex')
}

function doHttpRequest(options, resolve, reject) {
  // console.log('doHttpRequest', options)
  return https
    .request(options, resp => {
      let data = ''
      resp.on('data', chunk => {
        data += chunk
      })
      resp.on('end', () => resolve(data))
    })
    .on('error', reject)
}
