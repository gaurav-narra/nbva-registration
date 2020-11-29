let request = require('promise-request-retry');
let config = require('./config');
let VError = require('verror');

const notify = async (message) => {
  try {
    await request({
      url: config.ifttt.url,
      method: 'POST',
      json: true,
      retry: 2,
      delay: 1000,
      factor: 2,
      body: {
        value1: message
      }
    })
  } catch(err) {
    let verr = new VError({
      name: 'NotifyError',
      cause: err,
    }, 'notification request failed')
    console.log(verr.message)
    console.log(verr.stack)
  }
}

module.exports = {
  notify
}
