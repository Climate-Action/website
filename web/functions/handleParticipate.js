const https = require('https')
const crypto = require('crypto')

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
const SLACK_TOKEN = process.env.SLACK_TOKEN
const SLACK_TESTING_CHANNEL = process.env.SLACK_TESTING_CHANNEL

exports.handler = function(event, context, callback) {
  console.info(event.queryStringParameters)
  let userData
  try {
    userData = JSON.parse(event.body)
  } catch (e) {
    return callback(e, {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: e.message,
    })
  }
  const runConfig = {
    disableSlack: event.queryStringParameters.disableSlack === 'true',
    disableMailchimp: event.queryStringParameters.disableMailchimp === 'true'
  }
  run(userData, runConfig)
    .then(data => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data),
      })
    })
    .catch(callback)
}

async function run(userData, runConfig) {
  try {
    let returnJson = {
      msg: 'Success',
    }
    if (!runConfig.disableMailchimp) {
      const mailchimpResponse = await addToMailchimp(userData)
      returnJson = JSON.parse(mailchimpResponse).status
    }
    if (!runConfig.disableSlack) {
      await sendSlackMessage(
        `${userData.NAME} <${userData.EMAIL}> wants to participate in the Hive Initiative!\n> ${userData.ABOUT}`,
      )
    }
    return Promise.resolve({
      msg: returnJson,
    })
  } catch (e) {
    return Promise.reject(e)
  }
}

async function sendSlackMessage(message) {
  return new Promise((resolve, reject) => {
    const slackMessage = {
      channel: SLACK_TESTING_CHANNEL,
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
