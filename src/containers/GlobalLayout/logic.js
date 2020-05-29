import { useEffect } from 'react'
import { curry } from 'ramda'

import { EVENT } from '@/constant'
import { buildLog, send, cs } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('L:GlobalLayout')

let store = null

export const openDoraemon = () => store.openDoraemon()
/* eslint-disable no-unused-vars */
export const queryDoraemon = curry((data, e) =>
  send(EVENT.QUERY_DORAMON, { data })
)

/**
 * calc init innerWrapper width of the global layout
 * 计算全局模板的内层最小宽度
 *
 * @param {ReactRef} ref
 * @returns {string}
 */
export const calcInitWidth = ref => {
  const { clientWidth } = ref.current
  const MAX_WIDTH = Number(cs.GLOBAL_MAX_WIDTH.slice(0, -2))
  const WINDOW_WIDTH = window.innerWidth

  let minWidth
  if (WINDOW_WIDTH > MAX_WIDTH) minWidth = `${MAX_WIDTH}px`
  if (WINDOW_WIDTH < MAX_WIDTH) minWidth = `${WINDOW_WIDTH}px`

  return minWidth
}

/**
 * log ascii Buddha just for fun
 * 控制台打印佛祖保佑
 */
export const logBuddha = () => {
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
      '.........................................................'
  )
  /* eslint-enable */
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

    const { online, media, platform } = extra
    store.mark({ online, media, platform })
  }, [_store, extra])
}
