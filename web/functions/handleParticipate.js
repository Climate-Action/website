const https = require('https')
const crypto = require('crypto')

const MAILCHIMP_MEMBER_URL = 'https://us20.admin.mailchimp.com/lists/members/view'
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
const SLACK_TOKEN = process.env.SLACK_TOKEN
const SLACK_SIGNUP_NOTIFICATION_CHANNEL = process.env.SLACK_SIGNUP_NOTIFICATION_CHANNEL

const acceptableOrigins = [
  'http://localhost:3000',
  'https://develop--climate-action.netlify.app',
  'https://climate-action.netlify.app',
  'https://hiveinitiative.org',
]

exports.handler = function(event, context, callback) {
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
  run(userData, runConfig)
    .then(data => {
      callback(null, {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify(data),
      })
    })
    .catch(callback)
}

async function run(userData, runConfig) {
  try {
    let returnValue = 'Success'
    let webId = ''
    if (!runConfig.disableMailchimp) {
      const mailchimpResponse = await addToMailchimp(userData)
      const mailchimpJson = JSON.parse(mailchimpResponse)
      returnValue = mailchimpJson.status
      webId = mailchimpJson.web_id
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
    const req = getHttpRequest(
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
    const emailHash = crypto
      .createHash('md5')
      .update(userData.EMAIL)
      .digest('hex')
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
    const req = getHttpRequest(
      {
        host: 'us20.api.mailchimp.com',
        path: `/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${emailHash}`,
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
        },
      },
      resolve,
      reject,
    )
    req.write(JSON.stringify(jsonData))
    req.end()
  })
}

function getHttpRequest(options, resolve, reject) {
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
