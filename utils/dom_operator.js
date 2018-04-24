// side effects, need refactor
/* eslint-disable no-undef */
const hasDocument = typeof document === 'object' && document !== null
const hasWindow =
  typeof window === 'object' && window !== null && window.self === window

const isBrower = () => hasDocument && hasWindow
const getDocument = () => (isBrower() ? document : null)

export const pageGoTop = () => {
  const safeDocument = getDocument()
  if (safeDocument) {
    safeDocument.body.scrollTop = 0 // For Safari
    safeDocument.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Oper
  }
}

export const holdPage = () => {
  const safeDocument = getDocument()

  if (safeDocument) {
    const el = safeDocument.getElementById('body')
    el.style.overflowY = 'hidden'
  }
}

export const unholdPage = () => {
  const safeDocument = getDocument()

  if (safeDocument) {
    const el = safeDocument.getElementById('body')
    el.style.overflowY = 'auto'
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

/* eslint-enable no-undef */
