import { useEffect } from 'react'

import { buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('L:GlobalLayout')

let store = null

export const openDoraemon = () => store.openDoraemon()

// custromScroll's scroll direction change
export const bodyScrollDirectionOnChange = (bodyScrollDirection) =>
  store.mark({ bodyScrollDirection })
/**
 * log ascii Buddha just for fun
 * 控制台打印佛祖保佑
 */
export const logBuddha = () => {
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

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, extra) => {
  useEffect(() => {
    store = _store

    // FIXME:  do not show body scrollbar on mac
    /* eslint-disable no-undef */
    // OverlayScrollbars(document.querySelectorAll('body'), {
    // NOT WORK!
    // scrollbars: { autoHide: 'scroll', autoHideDelay: 500 },
    // })

    const { online, platform } = extra
    store.mark({ online, platform })
  }, [_store, extra])
}
