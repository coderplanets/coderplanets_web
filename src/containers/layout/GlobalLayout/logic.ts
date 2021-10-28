import {
  ReactNode,
  useEffect,
  Children,
  isValidElement,
  cloneElement,
} from 'react'
import PubSub from 'pubsub-js'

import type { TScrollDirection } from '@/spec'
import { EVENT } from '@/constant'
import { buildLog } from '@/utils/logger'

import type { TStore } from './store'

/* eslint-disable-next-line */
const log = buildLog('L:GlobalLayout')

let store: TStore | undefined

export const openDoraemon = (): void => store.openDoraemon()

// custromScroll's scroll direction change
export const onPageScrollDirhange = (
  bodyScrollDirection: TScrollDirection,
): void => store.mark({ bodyScrollDirection })
/**
 * log ascii Buddha just for fun
 * 控制台打印佛祖保佑
 */
export const logBuddha = (): void => {
  if (process.env.NODE_ENV === 'production') {
    /* eslint-disable */
    console.log(
      ' .......................................................\n\n\n' +
        '                       _oo0oo_                      \n' +
        '                      o8888888o                     \n' +
        '                      88" . "88           if (bug) {                  \n' +
        '                      (| -_- |)    .oO      bug = false          \n' +
        '                      0\\  =  /0           }             \n' +
        '                    ___/‘---’\\___                   \n' +
        "                  .' \\|       |/ '.                 \n" +
        '                 / \\\\|||  :  |||// \\                \n' +
        '                / _|||||-【】-|||||_ \\               \n' +
        '               |   | \\\\\\  -  /// |   |              \n' +
        "               | \\_|  ''\\---/''  |_/ |              \n" +
        "               \\  .-\\__  '-'  ___/-. /              \n" +
        "             ___'. .'  /--.--\\  '. .'___            \n" +
        '           ."" ‘<‘.___\\_<|>_/___.’>’ "".          \n' +
        '        | | :  ‘- \\‘.;‘\\ _ /’;.’/ - ’ : | |        \n' +
        '         \\  \\ ‘_.   \\_ __\\ /__ _/   .-’ /  /        \n' +
        '    =====‘-.____‘.___ \\_____/___.-’___.-’=====     \n' +
        '                       ‘=---=’                      \n' +
        '                                                    \n\n' +
        '.........................................................\n\n' +
        ' ##########   https://github.com/coderplanets   #########\n\n' +
        '.........................................................',
    )
    /* eslint-enable */
  }
}

// cloning children with new props
// see detail: https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
export const childrenWithProps = (
  children: ReactNode,
  props: Record<string, unknown>,
): ReactNode => {
  return Children.map(children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (isValidElement(child)) {
      return cloneElement(child, { ...props })
    }
    return child
  })
}

const handleAuthWarning = (option): void => store.authWarning(option)

const handleToast = (data): void => {
  const { type, ...rest } = data
  store.toast(type, rest)
}

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore, extra): void => {
  useEffect(() => {
    store = _store

    // FIXME:  do not show body scrollbar on mac
    /* eslint-disable no-undef */
    // OverlayScrollbars(document.querySelectorAll('body'), {
    // NOT WORK!
    // scrollbars: { autoHide: 'scroll', autoHideDelay: 500 },
    // })

    console.log(
      'global accountInfo isValidSession: ',
      store.accountInfo.isValidSession,
    )
    const { online, isMobile } = extra
    store.mark({ online, isMobile })

    PubSub.unsubscribe(EVENT.AUTH_WARNING)
    PubSub.unsubscribe(EVENT.TOAST)
    PubSub.subscribe(EVENT.AUTH_WARNING, (e, opt) => handleAuthWarning(opt))
    PubSub.subscribe(EVENT.TOAST, (e, opt) => handleToast(opt))

    return () => {
      PubSub.unsubscribe(EVENT.AUTH_WARNING)
      PubSub.unsubscribe(EVENT.TOAST)
    }
  }, [_store, extra])
}
