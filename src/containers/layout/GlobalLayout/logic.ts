import React, { useEffect } from 'react'

import type { TScrollDirection } from '@/spec'
import { buildLog } from '@/utils'
import type { TStore } from './store'

/* eslint-disable-next-line */
const log = buildLog('L:GlobalLayout')

let store: TStore | undefined

export const openDoraemon = (): void => store.openDoraemon()

// custromScroll's scroll direction change
export const bodyScrollDirectionOnChange = (
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
  children: React.ReactNode,
  props: Record<string, unknown>,
): React.ReactNode => {
  return React.Children.map(children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...props })
    }
    return child
  })
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

    const { online, platform, isMobile } = extra
    store.mark({ online, platform, isMobile })
  }, [_store, extra])
}
