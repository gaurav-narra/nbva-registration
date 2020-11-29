const fs = require('fs');

module.exports = {
  noEventHtml: fs.readFileSync(`${__dirname}/no-event.html`, 'utf8').toString(),
  errorHmtl: fs.readFileSync(`${__dirname}/no-event.html`, 'utf8').toString()
}