import type { IziToast } from 'iziToast'

declare global {
  interface IWindow extends Window {
    iziToast: IziToast
  }
}
