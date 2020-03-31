import R from 'ramda'
import { TYPE } from '@constant'
// side effects, need refactor
/* eslint-disable no-undef */
const hasDocument = typeof document === 'object' && document !== null
const hasWindow =
  typeof window === 'object' && window !== null && window.self === window

export const isBrowser = () => hasDocument && hasWindow
const getDocument = () => (isBrowser() ? document : null)

/**
 * scroll to page top
 * @return {void}
 */
export const scrollToTop = () => {
  const safeDocument = getDocument()
  const c =
    safeDocument.documentElement.scrollTop || safeDocument.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }

  // if (safeDocument) {
  //   safeDocument.body.scrollTop = 0 // For Safari
  //   safeDocument.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Oper
  // }
}

/**
 * scroll to page top
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView
 * @param {string} eleID element id
 * @return
 */
export const scrollIntoEle = eleID => {
  const safeDocument = getDocument()
  if (!safeDocument) return false

  const e = safeDocument.getElementById(eleID)
  if (!!e && e.scrollIntoView) {
    e.scrollIntoView({ behavior: 'smooth' })
  }
}

export const scrollToHeader = () => scrollIntoEle(TYPE.APP_HEADER_ID)
export const scrollToTabber = () => scrollIntoEle(TYPE.APP_TABBER_ID)

/**
 * froze page's body element
 */
export const lockPage = () => {
  const safeDocument = getDocument()

  if (safeDocument) {
    const el = safeDocument.getElementById('body')
    el.style.overflowY = 'hidden'
    /* el.style.position = 'fixed' */
  }
}

/**
 * unfroze page's body element
 */
export const unlockPage = () => {
  const safeDocument = getDocument()

  if (safeDocument) {
    const el = safeDocument.getElementById('body')
    el.style.overflowY = 'auto'
    /* el.style.position = '' */
  }
}

export const focusDoraemonBar = () => {
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
    }, 0)
  }
}

export const blurDoraemonBar = () => {
  const safeDocument = getDocument()

  if (safeDocument) {
    setTimeout(() => {
      try {
        safeDocument.getElementById('doraemonInputbar').blur()
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    }, 0)
  }
}

export const hideDoraemonBarRecover = () => {
  const safeDocument = getDocument()

  if (safeDocument) {
    // side effect
    // onBlur will on focus the whole page, if not use this
    // openDoraemon will not work until you click the page
    document.getElementById('whereCallShowDoraemon').click()
  }
}

/**
 * toggle global blurable elements, and lock page
 * 注意不能全局 blur 根元素，会和 position: fixed 冲突
 * see issue: https://stackoverflow.com/questions/52937708/css-filter-on-parent-breaks-child-positioning
 * @param {boolean} visible
 */
export const toggleGlobalBlur = visible => {
  const blurableEls = document.querySelectorAll(`.${TYPE.GLOBAL_BLUR_CLASS}`)

  if (blurableEls) {
    R.forEach(el => {
      visible
        ? el.classList.add('global_blur')
        : el.classList.remove('global_blur')
    }, blurableEls)
  }
  visible ? lockPage() : unlockPage()
}

/* eslint-enable no-undef */
