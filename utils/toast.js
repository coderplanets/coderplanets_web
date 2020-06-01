/*
 *
 */

import { merge, reject } from 'ramda'

import { Global } from './functions'
import { nilOrEmpty } from './validator'

const checkValid = () => Global.iziToast || false

const defaultOptions = {
  title: 'coderplanets',
  message: 'is Awesome!',
  position: 'topRight',
  timeout: 5000,
  icon: '',
  progressBarColor: 'yellogreen',
  displayMode: 'replace',
  transitionIn: 'fadeInDown',
}

const doNotify = (options = {}) => {
  if (!checkValid()) return false

  /* eslint-disable no-undef */
  iziToast.show(merge(defaultOptions, reject(nilOrEmpty, options)))
  return false
}

export const toast = {
  info: ({ title, msg, progressBarColor, position }) =>
    doNotify({ title, message: msg, progressBarColor, position }),
  error: ({ title, msg, progressBarColor, position }) =>
    doNotify({ title, message: msg, progressBarColor, position }),
  success: ({ title, msg, progressBarColor, position }) =>
    doNotify({ title, message: msg, progressBarColor, position }),
  warn: ({ title, msg, progressBarColor, position }) =>
    doNotify({ title, message: msg, progressBarColor, position }),
}

export const toastBarColor = (type, themeData) => {
  switch (type) {
    case 'success':
      return themeData.toast.successBar

    case 'error':
      return themeData.toast.errorBar

    case 'warn':
      return themeData.toast.warnBar

    default:
      return themeData.toast.infoBar
  }
}
