let nbva = require('./nbva');
let ifttt = require('./ifttt');

const run = async () => {
  let isEventOpen;

  try {
    isEventOpen = await nbva.isEventOpen()
  } catch(err) {
    console.log(err.message)
    console.log(err.stack)
    await ifttt.notify(err.message)
  }

  if(isEventOpen) {
    await ifttt.notify('Registration is probably open')
  }
}

module.exports = {
  run
}
