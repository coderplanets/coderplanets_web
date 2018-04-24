// side effects, need refactor
export const holdPage = () => {
  /* eslint-disable no-undef */
  const el = document.getElementById('body')
  /* eslint-enable no-undef */
  el.style.overflowY = 'hidden'
}

export const unholdPage = () => {
  /* eslint-disable no-undef */
  const el = document.getElementById('body')
  /* eslint-enable no-undef */

  el.style.overflowY = 'auto'
}

export const focusDoraemonBar = () => {
  setTimeout(() => {
    // side effect
    /* eslint-disable */
    // has to use setTimeout
    // see: https://stackoverflow.com/questions/1096436/document-getelementbyidid-focus-is-not-working-for-firefox-or-chrome
    try {
      document.getElementById('doraemonInputbar').focus()
    } catch (e) {
      console.error(e)
    }
    /* eslint-enable */
  }, 0)
}

export const hideDoraemonBarRecover = () => {
  // side effect
  // onBlur will on focus the whole page, if not use this
  // openDoraemon will not work until you click the page
  /* eslint-disable no-undef */
  document.getElementById('whereCallShowDoraemon').click()
  /* eslint-enable no-undef */
}
