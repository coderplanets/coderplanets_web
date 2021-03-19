/*
 *
 */

import { merge, reject } from 'ramda'

import { TThemeMap } from '@/spec'
import { Global } from './helper'
import { nilOrEmpty } from './validator'

type TToastType = 'success' | 'error' | 'warn'

type TToastOption = {
  title: string
  msg: string
  progressBarColor: string
  position: 'bottom' | 'top'
}

const checkValid = () => (Global as any).iziToast || false

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

const doNotify = (options = {}): void => {
  if (!checkValid()) {
    return
  }
  const { iziToast } = Global as any
  iziToast.show(merge(defaultOptions, reject(nilOrEmpty, options)))
}

export const toast = {
  info: ({ title, msg, progressBarColor, position }: TToastOption): void => {
    doNotify({ title, message: msg, progressBarColor, position })
  },
  error: ({ title, msg, progressBarColor, position }: TToastOption): void => {
    doNotify({ title, message: msg, progressBarColor, position })
  },
  success: ({ title, msg, progressBarColor, position }: TToastOption): void => {
    doNotify({ title, message: msg, progressBarColor, position })
  },
  warn: ({ title, msg, progressBarColor, position }: TToastOption): void => {
    doNotify({ title, message: msg, progressBarColor, position })
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
