/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IziToast } from 'iziToast'

interface IWindow extends Window {
  iziToast?: IziToast
  appVersion?: string
  /**
   * used for check platform hook
   */
  chrome?: any
  safari?: any
  StyleMedia?: any
  HTMLElement?: any
}

declare global {
  type TWindow = IWindow | null
}
