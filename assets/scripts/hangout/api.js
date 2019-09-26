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
    url: config.apiUrl + '/hangouts/' + data.hangoutId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteHangout = function (id) {
  return $.ajax({
    url: config.apiUrl + '/hangouts/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// runs a get for Attendance objects owned by a particular Hangout
const getAttendance = function (hangoutId) {
  return $.ajax({
    url: config.apiUrl + '/attendances/' + hangoutId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// creates an Attendance object owned by the User and the Hangout
const createAttend = function (hangoutId) {
  return $.ajax({
    url: config.apiUrl + '/attendances',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      attendance: {
        going: true,
        owner: store.user._id,
        hangout: hangoutId
      }
    }
  })
}

module.exports = {
  onCreateHangout,
  getHangouts,
  updateHangout,
  deleteHangout,
  createAttend,
  getAttendance
}
