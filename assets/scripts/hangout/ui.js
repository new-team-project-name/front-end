'use strict'

const showHangouts = require('../templates/show-hangouts.handlebars')

const updateFeed = function (data) {
  const showHangoutsHTML = showHangouts({ hangouts: data.hangouts })
  $('.temporary-hangout-holder').html(showHangoutsHTML)
}

const eventCreateFailure = function () {
// more code
}

module.exports = {
  updateFeed,
  eventCreateFailure
}
