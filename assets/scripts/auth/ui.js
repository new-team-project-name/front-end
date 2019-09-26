'use strict'
const store = require('./../store')

const signUpSuccess = function (data) {
  store.user = data.user
  $('.after-auth').css('display', 'initial')
  $('.before-auth').css('display', 'none')
  $('.sign-up-alert').text('')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('.sign-up-alert').text('Sign up was not successful')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.after-auth').css('display', 'initial')
  $('.before-auth').css('display', 'none')
  $('.sign-up-alert').text('')
  $('#sign-in-modal').modal('hide')
  $('form').trigger('reset')
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
  // $('#signed-in-user').text('')
  $('.navbar').hide()
  $('#credentials').show()
  $('.content').empty()
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('.change-password-alert').text('')
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
