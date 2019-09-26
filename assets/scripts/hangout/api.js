'use strict'

const config = require('./../config')
const store = require('./../store')

const onCreateHangout = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/hangouts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      hangout: {
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

const getHangouts = function () {
  return $.ajax({
    url: config.apiUrl + '/hangouts'
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

const updateHangout = function (data) {
  return $.ajax({
    url: config.apiUrl + '/hangouts' + data.hangouts.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteHangout = function (id) {
  return $.ajax({
    url: config.apiUrl + '/hangouts' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  onCreateHangout,
  getHangouts,
  updateHangout,
  deleteHangout
}
