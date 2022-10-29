/*
 *
 */

import { merge, reject } from 'ramda'

import type { TThemeMap, TToastOption } from '@/spec'
import { DEFAULT_TOAST_OPTIONS } from '@/constant'

import { Global } from './helper'
import { nilOrEmpty } from './validator'

type TToastType = 'success' | 'error' | 'warn'

const checkValid = () => (Global as TWindow).iziToast || false

const doNotify = (options = {}): void => {
  if (!checkValid()) {
    return
  }
  const { iziToast } = Global as TWindow
  // @ts-ignore
  iziToast.show(merge(DEFAULT_TOAST_OPTIONS, reject(nilOrEmpty, options)))
}

export const toast = {
  info: ({
    title,
    msg,
    progressBarColor,
    position,
    duration,
  }: TToastOption): void => {
    doNotify({
      title,
      message: msg,
      progressBarColor,
      position,
      timeout: duration,
    })
  },
  error: ({
    title,
    msg,
    progressBarColor,
    position,
    duration,
  }: TToastOption): void => {
    doNotify({
      title,
      message: msg,
      progressBarColor,
      position,
      timeout: duration,
    })
  },
  success: ({
    title,
    msg,
    progressBarColor,
    position,
    duration,
  }: TToastOption): void => {
    doNotify({
      title,
      message: msg,
      progressBarColor,
      position,
      timeout: duration,
    })
  },
  warn: ({
    title,
    msg,
    progressBarColor,
    position,
    duration,
  }: TToastOption): void => {
    doNotify({
      title,
      message: msg,
      progressBarColor,
      position,
      timeout: duration,
    })
  },
}

export const toastBarColor = (
  type: TToastType,
  themeData: TThemeMap,
): string => {
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
