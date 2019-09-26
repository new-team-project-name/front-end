'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

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

const onAttend = (event) => {
  event.preventDefault()
  // grab ID from target for the Hangout
  const hangoutId = $(event.target).data('id')
  // run a get on Attendances, getting only Attendnaces for this Hangout
  api.getAttendance(hangoutId)
    .then(data => {
      // check if Attendances for this Hangout includes the current user already
      // if so, the user has already RSVP'd
      if (!data.attendances.includes((attendance) => {
        return attendance.owner === store.user._id
      })) {
        // as long as the user has not already RSVP'd, create Attendance object
        api.createAttend(hangoutId)
          .then(ui.attendSuccess)
          .catch(console.error)
      } else {
        console.log(data.attendances)
      }
    })
    .catch(console.error)
    // need to clean up console logs and console.errors
}

// "5d8cda3be2d56666f88f79ce"
// "5d8cda3be2d56666f88f79ce"
// "5d8cda3be2d56666f88f79ce"

const addHangoutEventHandlers = function () {
  $('#new-event').on('submit', onCreateHangout)
  $('.content').on('click', '.delete-button', onDeleteHangout)
  $('.temporary-hangout-holder').on('click', '.attend-button', onAttend)
  $('.content').on('click', '.update-button', onShowUpdateModal)
  $('#update-hangout').on('submit', onUpdateHangout)
}

module.exports = {
  addHangoutEventHandlers,
  onGetHangouts
}
