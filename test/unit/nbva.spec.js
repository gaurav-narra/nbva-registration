let nbva = require(`${global.SRC}/nbva`);
let sinon = require('sinon');
let request = require('request-promise');
let factory = require('../factory');

describe('nbva', () => {
  let sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.stub(request, 'get')
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should handle error when requesting nbva page', async () => {
    request.get.rejects(new Error('error connecting to remote'))
    try {
      await nbva.isEventOpen()
    } catch(err) {
      err.message.should.eql('request failed: error connecting to remote')
    }
  })

  it('should handle error when parsing the html', async () => {
    request.get.resolves(factory.errorHtml)
    try {
      await nbva.isEventOpen()
    } catch(err) {
      err.message.should.eql('error parsing the html: can\'t find the data div')
    }
  })

  it('should parse valid no event response', async () => {
    request.get.resolves(factory.noEventHtml)
    let response = await nbva.isEventOpen()
    response.should.eql(false)
  })
})