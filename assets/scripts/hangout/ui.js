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
  })
  console.log(editData)

  const showHangoutsHTML = showHangouts({ hangouts: editData })
  $('.temporary-hangout-holder').html(showHangoutsHTML)
}

const getAttendance = function (data) {
  const showAttendanceHTML = showAttendees({ attendees: data.attendances })
  $('.custom-popover').html(showAttendanceHTML)
  $('[data-toggle="popover"]').popover({
    html: true,
    content: function () {
      return $('#popover-content').html()
    }
  })
  $('.popover-dismiss').popover({
    trigger: 'focus'
  })
}

const initialUpdateFeed = function (data) {
  const showHangoutsHTML = showHangouts({ hangouts: data.hangouts })
  $('.temporary-hangout-holder').html(showHangoutsHTML)
}

const eventCreateFailure = function () {
// more code
}

module.exports = {
  updateFeed,
  eventCreateFailure,
  initialUpdateFeed,
  getAttendance
}
