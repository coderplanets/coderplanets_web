// From https://gist.github.com/gauravtiwari/2ae9f44aee281c759fe5a66d5c2721a2
// By https://gist.github.com/gauravtiwari

/* global window */

/* eslint-disable */
const popup = authUrl => {
  const windowArea = {
    width: Math.floor(window.outerWidth * 0.6),
    height: Math.floor(window.outerHeight * 0.5),
  }

  if (windowArea.width < 1000) {
    windowArea.width = 600
  }
  if (windowArea.height < 630) {
    windowArea.height = 550
  }
  windowArea.left = Math.floor(
    window.screenX + (window.outerWidth - windowArea.width) / 2
  )
  windowArea.top = Math.floor(
    window.screenY + (window.outerHeight - windowArea.height) / 3
  )

  const sep = authUrl.indexOf('?') !== -1 ? '&' : '?'
  const url = `${authUrl}${sep}`
  const windowOpts = `toolbar=0,scrollbars=1,status=1,resizable=1,location=1,menuBar=0,
    width=${windowArea.width},height=${windowArea.height},
    left=${windowArea.left},top=${windowArea.top}`

  const authWindow = window.open(url, '_blank', windowOpts)
  // Create IE + others compatible event handler
  const eventMethod = window.addEventListener
    ? 'addEventListener'
    : 'attachEvent'
  const eventer = window[eventMethod]
  const messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message'

  /* const Timer = setInterval(() => { */
  // detect code here
  const scanTimer = setInterval(() => {
    /* const scanTimer = setTimeout(() => { */
    if (
      authWindow.location.search === undefined &&
      authWindow.location.href === undefined
    ) {
      clearInterval(scanTimer)
    }
    window.postMessage(
      { from_oauth_window: authWindow.location.search },
      window.location.href
    )
  }, 1000)

  // Listen to message from child window
  const authPromise = new Promise((resolve, reject) => {
    eventer(
      messageEvent,
      msg => {
        // This doesn't work in Chrome 59
        // if (e.origin !== window.SITE_DOMAIN) {
        // https://stackoverflow.com/questions/25098021/securityerror-blocked-a-frame-with-origin-from-accessing-a-cross-origin-frame

        if (
          /* eslint-disable */
          !~msg.origin.indexOf(
            `${window.location.protocol}//${window.location.host}`
          )
          /* eslint-enable */
        ) {
          clearInterval(scanTimer)
          authWindow.close()
          reject(new Error('Not allowed'))
        }

        if (msg.data.from_parent) {
          clearInterval(scanTimer)
          authWindow.close()
        } else {
          // clearInterval(Timer)
          // clearInterval(Timer)
          // authWindow.close()
          // reject('Unauthorised')
        }
      },
      false
    )
  })

  return authPromise
}
/* eslint-enable */

export default popup
