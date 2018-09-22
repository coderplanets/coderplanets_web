/*
 *
 */

import R from 'ramda'

import { Global } from './functions'

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
  iziToast.show(R.merge(defaultOptions, options))
  /* eslint-enable no-def */
  return false
}

export const toast = {
  info: ({ title, msg, progressBarColor }) =>
    doNotify({ title, message: msg, progressBarColor }),
  error: ({ title, msg, progressBarColor }) =>
    doNotify({ title, message: msg, progressBarColor }),
  success: ({ title, msg, progressBarColor }) =>
    doNotify({ title, message: msg, progressBarColor }),
  warn: ({ title, msg, progressBarColor }) =>
    doNotify({ title, message: msg, progressBarColor }),
}

export const toastBarColor = (type, themeData) => {
  switch (type) {
    case 'success': {
      return themeData.toast.successBar
    }
    case 'error': {
      return themeData.toast.errorBar
    }
    case 'warn': {
      return themeData.toast.warnBar
    }
    default:
      return themeData.toast.infoBar
  }
}
