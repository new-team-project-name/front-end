'use strict'
const store = require('./../store')
const hangoutEvents = require('./../hangout/events')

const signUpSuccess = function (data) {
  store.user = data.user
  store.user.loggedIn = true
  $('.after-auth').css('display', 'initial')
  $('.before-auth').css('display', 'none')
  $('.sign-up-alert').text('')
  $('form').trigger('reset')
  hangoutEvents.onGetHangouts()
}

const signUpFailure = function () {
  $('.sign-up-alert').text('Sign up was not successful')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  store.user.loggedIn = true
  $('.after-auth').css('display', 'initial')
  $('.before-auth').css('display', 'none')
  $('.sign-up-alert').text('')
  $('#sign-in-modal').modal('hide')
  $('form').trigger('reset')
  hangoutEvents.onGetHangouts()
}

const signInFailure = function () {
  $('.sign-in-alert').text('Sign in was not successful')
  $('.sign-up-alert').text('')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#change-password-modal').modal('hide')
  $('.change-password-alert').text('')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('.change-password-alert').text('Password was not changed succesfully.')
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  store.user = {}
  $('.after-auth').css('display', 'none')
  $('.before-auth').css('display', 'initial')
  $('#credentials').show()
  $('.sign-out-alert').text('Sign out was successful!')
  setTimeout(function () { $('.sign-out-alert').text('') }, 3000)
  $('.content').empty()
  $('form').trigger('reset')
  $('#auth').css('display', 'none')
  $('#pre-auth').css('display', 'initial')
  $('.content').empty()
  hangoutEvents.onInitialGetHangouts()
  // console.log('signOutSuccess ran')
}

const signOutFailure = function () {
  $('.sign-out-alert').text('Sorry, there was an error signing out.')
  $('form').trigger('reset')
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
