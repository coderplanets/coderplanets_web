import { ANCHOR } from '@/constant'
// side effects, need refactor
/* eslint-disable no-undef */
const hasDocument = typeof document === 'object' && document !== null
const hasWindow =
  typeof window === 'object' && window !== null && window.self === window

/**
 * check is client side or not
 */
export const isBrowser = (): boolean => hasDocument && hasWindow
const getDocument = () => (isBrowser() ? document : null)

/**
 * scroll to page top
 */
export const scrollToTop = (): void => {
  scrollIntoEle(ANCHOR.GLOBAL_HEADER_ID)

  // NOTE:  not work with customScroller
  // const safeDocument = getDocument()
  // const c =
  //   safeDocument.documentElement.scrollTop || safeDocument.body.scrollTop
  // if (c > 0) {
  //   window.requestAnimationFrame(scrollToTop)
  //   window.scrollTo(0, c - c / 8)
  // }
}

/**
 * scroll to page top
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView
 */
export const scrollIntoEle = (eleID: string): void => {
  const safeDocument = getDocument()
  if (!safeDocument) return

  const e = safeDocument.getElementById(eleID)

  if (e?.scrollIntoView) {
    e.scrollIntoView({ behavior: 'smooth' })
  }
}

export const scrollToHeader = (): void => scrollIntoEle(ANCHOR.GLOBAL_HEADER_ID)
export const scrollToTabber = (): void => scrollIntoEle(ANCHOR.GLOBAL_TABBER_ID)

/**
 * froze page's body element
 * @returns {void}
 */
export const lockPage = (): void => {
  const safeDocument = getDocument()

  if (safeDocument) {
    const el = safeDocument.getElementById('body')
    el.style.overflowY = 'hidden'
    el.style.position = 'fixed !important'
  }
}

/**
 * unfroze page's body element
 * @returns {void}
 */
export const unlockPage = (): void => {
  const safeDocument = getDocument()

  if (safeDocument) {
    const el = safeDocument.getElementById('body')
    el.style.overflowY = 'auto'
    el.style.position = ''
  }
}

/**
 * focus on the open doraemon bar
 */
export const focusDoraemonBar = (): void => {
  const safeDocument = getDocument()

  if (safeDocument) {
    setTimeout(() => {
      // side effect
      // has to use setTimeout
      // see: https://stackoverflow.com/questions/1096436/document-getelementbyidid-focus-is-not-working-for-firefox-or-chrome
      try {
        safeDocument.getElementById('doraemonInputbar').focus()
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    })
  }
}

/**
 * onBlur will on focus the whole page, if not use this
 * openDoraemon will not work until you click the page
 */
export const hideDoraemonBarRecover = (): void => {
  const safeDocument = getDocument()

  if (safeDocument) {
    document.getElementById('whereCallShowDoraemon').click()
  }
}

/**
 * toggle global blurable elements, and lock page
 * 注意不能全局 blur 根元素，会和 position: fixed 冲突
 * @see @link https://stackoverflow.com/questions/52937708/css-filter-on-parent-breaks-child-positioning
 *
 * @param {Boolean} visible
 */
export const toggleGlobalBlur = (visible: boolean): void => {
  const blurableEls = document.querySelectorAll(`.${ANCHOR.GLOBAL_BLUR_CLASS}`)

  if (blurableEls) {
    for (let index = 0; index < blurableEls.length; index += 1) {
      const el = blurableEls[index] as HTMLElement

      !visible ? (el.style.filter = '') : (el.style.filter = 'blur(2px)')
    }
  }
}

/**
 * make global blur more clear, not still blur
 * @returns {void}
 */
export const clearGlobalBlur = (): void => {
  const blurableEls = document.querySelectorAll(`.${ANCHOR.GLOBAL_BLUR_CLASS}`)

  if (blurableEls) {
    for (let index = 0; index < blurableEls.length; index += 1) {
      const el = blurableEls[index] as HTMLElement

      el.style.filter = 'blur(1px)'
    }
  }
}

/**
 * only judge verticle
 * under the CustomScroller, the trandition inViewport method is not work
 * NOTE:  在 CustomScroller 的情况下，传统的判断 inViewport 的方法行不通
 * 只需简单判断当前 el 的高度和已经滑动的距离即可
 */
export const isElementInViewport = (el: HTMLElement): boolean => {
  if (!el) return false
  const rect = el.getBoundingClientRect()

  return rect.height + rect.y > 0
}
/* eslint-enable no-undef */

/**
 * add pixed by number
 *
 * e.g:
 * pixelAdd('20px', 10) => 30px
 */
export const pixelAdd = (current: string, num: number): string => {
  const pixelNum = Number(current.slice(0, -2))

  return `${pixelNum + num}px`
}

/**
 * check if child is descendant of the parent node
 * @see @link https://stackoverflow.com/questions/2234979/how-to-check-in-javascript-if-one-element-is-contained-within-another
 */
export const isDescendant = (
  parent: HTMLElement,
  child: HTMLElement,
): boolean => {
  let node = child.parentNode
  while (node != null) {
    if (node === parent) {
      return true
    }
    node = node.parentNode
  }
  return false
}
