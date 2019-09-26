'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateHangout = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onCreateHangout(data)
    .then(ui.updateFeed)
    .catch(ui.eventCreateFailure)
}

const onGetHangouts = () => {
  api.getHangouts()
    .then(ui.updateFeed)
    .catch(ui.eventGetFailure)
}

const onDeleteHangout = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteHangout(id)
    .then(ui.updateFeed)
    .catch(ui.eventDeleteFailure)
}

const onShowUpdateModal = () => {
  const currentHangout = $(event.target)
  const title = currentHangout.data('title')
  const picture = currentHangout.data('picture')
  const description = currentHangout.data('description')
  const date = currentHangout.data('date')
  const location = currentHangout.data('location')
  const website = currentHangout.data('website')
  $('#title').value(title)
  $('#picture').value(picture)
  $('#description').value(description)
  $('#date').value(date)
  $('#location').value(location)
  $('#website').value(website)
  $('#update-modal').modal('show')
}

const onUpdateHangout = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateHangout(data)
    .then(ui.updateFeed)
    .catch(ui.eventUpdateFailure)
}

const onAttend = () => {

}

const addHangoutEventHandlers = function () {
  $('#new-event').on('submit', onCreateHangout)
  $('.content').on('click', '.delete-button', onDeleteHangout)
  $('.content').on('click', '.attend-button', onAttend)
  $('.content').on('click', '.update-button', onShowUpdateModal)
  $('#update-hangout').on('submit', onUpdateHangout)
}

module.exports = {
  addHangoutEventHandlers,
  onGetHangouts
}
