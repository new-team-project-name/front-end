'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onNewEvent = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createEvent(data)
    .then(ui.updateFeed)
    .catch(ui.eventCreateFailure)
}

const addEventEventHandlers = function () {
  $('#new-event').on('submit', onNewEvent)
}

module.exports = {
  addEventEventHandlers
}
