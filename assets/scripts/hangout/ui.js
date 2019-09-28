'use strict'

const showHangouts = require('../templates/show-hangouts.handlebars')
const showAttendees = require('../templates/show-attendees.handlebars')
const store = require('./../store')

const updateFeed = function (data) {
  const editData = data.hangouts.map((hangout) => {
    hangout.loggedIn = true
    if (hangout.owner === store.user._id) {
      hangout.editable = true
    }
    return hangout
  }).reverse()
  const showHangoutsHTML = showHangouts({ hangouts: editData })
  $('.temporary-hangout-holder').html(showHangoutsHTML)
}

const getAttendance = function (data) {
  const showAttendanceHTML = showAttendees({ attendees: data.attendances })
  // $('.custom-popover').html(showAttendanceHTML)
  console.log('#' + store.currentHangoutId)
  $('#' + store.currentHangoutId).html(showAttendanceHTML)
  // $('[data-toggle="popover"]').popover({
  //   html: true,
  //   content: function () {
  //     return $('#popover-content').html()
  //   }
  // })
  // $('.popover-dismiss').popover({
  //   trigger: 'focus'
  // })
}

const attendSuccess = function () {
  $('.sign-out-alert').text('Congratulations!!! Your RSVP has been sent!')
  setTimeout(function () { $('.sign-out-alert').text('') }, 2000)
}

const rsvpFailure = function () {
  $('.sign-out-alert').text('Sorry, RSVP was not successful!')
  setTimeout(function () { $('.sign-out-alert').text('') }, 2000)
}

const rsvpAlreadySent = function () {
  $('.sign-out-alert').text('You have already sent an RSVP for this event!')
  setTimeout(function () { $('.sign-out-alert').text('') }, 2000)
}

const initialUpdateFeed = function (data) {
  const editData = data.hangouts.reverse()
  const showHangoutsHTML = showHangouts({ hangouts: editData })
  $('.temporary-hangout-holder').html(showHangoutsHTML)
}

const eventCreateFailure = function () {
  $('.sign-out-alert').text('Sorry, you event was not created. Try again.')
  setTimeout(function () { $('.sign-out-alert').text('') }, 3000)
}

module.exports = {
  attendSuccess,
  eventCreateFailure,
  getAttendance,
  initialUpdateFeed,
  rsvpFailure,
  rsvpAlreadySent,
  updateFeed
}
