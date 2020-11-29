let request = require('request-promise');
let { JSDOM } = require('jsdom');
let VError = require('verror');
let { nbva } = require('./config');

const isEventOpen = async () => {
  let response, eventText;

  try {
    response = await request.get(nbva.url)
  } catch(err) {
    let verr = new VError({
      name: 'RequestError',
      cause: err,
    }, 'request failed')
    throw(verr)
  }

  try {
    eventText = parseHtml(response)
  } catch(err) {
    let verr = new VError({
      name: 'HtmlParsingError',
      cause: err,
    }, 'error parsing the html')
    throw(verr)
  }

  if(eventText === nbva.noEventText) {
    return false
  }

  return true
}

const parseHtml = (html) => {
  let dom = new JSDOM(html);
  let formDiv = dom.window.document.querySelector('[data-id="a49df9b"]')

  if(!formDiv) {
    throw(new Error('can\'t find the data div'))
  }

  return formDiv.textContent.trim()
}

module.exports = {
  isEventOpen
}
