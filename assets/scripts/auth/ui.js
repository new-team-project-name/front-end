'use strict'
const store = require('./../store')

const signUpSuccess = function (data) {
  store.user = data.user
  $('#auth').css('display', 'initial')
  $('#pre-auth').css('display', 'none')
  // $('.text-field').val('')
  // $('.form-control').val('')
  //  $('#sign-up').reset()
  // console.log('signUpSuccess ran')
}

const signUpFailure = function () {
  // $('.text-field').val('')
  // $('.form-control').val('')
  // console.error('signUpFailure ran')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#auth').css('display', 'initial')
  $('#pre-auth').css('display', 'none')
  // $('.text-field').val('')
  // $('.form-control').val('')
  //  $('#sign-up').reset()
  // console.log('signInSuccess ran')
}

const signInFailure = function () {
  // $('.text-field').val('')
  // $('.form-control').val('')
  // console.error('signInFailure ran')
}

const changePasswordSuccess = function (data) {
  // $('#message').text('Password updated')
  // $('#message').attr('class', 'success')
  // $('.text-field').val('')
  // console.log('changePaswordSuccess ran')
}

const changePasswordFailure = function () {
  // $('#message').text('Password couldn\'t be updated. Please try again.')
  // $('#message').attr('class', 'failure')
  // $('.text-field').val('')
  // console.error('changePasswordFailure ran')
}

const signOutSuccess = function (data) {
  // $('#message').text('Sign off complete')
  // $('#message').attr('class', 'success')
  $('#auth').css('display', 'none')
  $('#pre-auth').css('display', 'initial')
  // $('.content').empty()
  // console.log('signOutSuccess ran')
}

const signOutFailure = function () {
  // $('#message').text('Sorry, you couldn\'t be signed off')
  // $('#message').attr('class', 'failure')
  // console.error('signOutFailure ran')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
