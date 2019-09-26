'use strict'

const authEvents = require('./auth/events')
const hangoutEvents = require('./hangout/events')
const store = require('./store')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addAuthEventHandlers()
  hangoutEvents.addHangoutEventHandlers()
  hangoutEvents.onGetHangouts()
  $('.before-auth').show()
  $('.after-auth').hide()
  $('.navbar').show()
})
