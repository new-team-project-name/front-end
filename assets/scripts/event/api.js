'use strict'

const config = require('./../config')
const store = require('./../store')

const onCreateEvent = function (data) {
  return $.ajax({
    url: config.apiUrl + '/events',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      event: {
        title: data.title,
        picture: data.picture,
        description: data.description,
        date: data.date,
        location: data.location,
        owner: store.user._id,
        website: data.website

      }
    }
  })
}

module.exports = {
  onCreateEvent
}
