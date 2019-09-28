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

const onInitialGetHangouts = () => {
  api.getHangouts()
    .then(ui.initialUpdateFeed)
    .catch(ui.eventGetFailure)
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

const onUpdateHangout = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.hangoutId = $(event.target).data('id')
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
      const attendances = data.attendances.map((attendance) => { return attendance.owner._id })
      if (!attendances.includes(store.user._id)) {
        // as long as the user has not already RSVP'd, create Attendance object
        api.createAttend(hangoutId)
          .then(ui.attendSuccess)
          .catch(ui.rsvpFailure)
      } else {
        ui.rsvpAlreadySent()
      }
    })
    .catch(ui.rsvpFailure)
}

const onGetAttendance = (event) => {
  event.preventDefault()
  // $('.custom-popover').html(`<img src="./public/giphy.gif">`)
  const hangoutId = $(event.target).data('id')
  store.currentHangoutId = hangoutId
  api.getAttendance(hangoutId)
    .then(ui.getAttendance)
    .catch(ui.getAttendanceFailure)
}

const addHangoutEventHandlers = function () {
  $('#new-event').on('submit', onCreateHangout)
  $('.temporary-hangout-holder').on('click', '.delete-button', onDeleteHangout)
  $('.temporary-hangout-holder').on('click', '.attend-button', onAttend)
  $('.temporary-hangout-holder').on('submit', '.edit-hangout', onUpdateHangout)
  $('.temporary-hangout-holder').on('click', '.show-attend-button', onGetAttendance)
}

module.exports = {
  addHangoutEventHandlers,
  onInitialGetHangouts,
  onGetHangouts
}
