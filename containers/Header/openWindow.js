/* global window */

const popup = myUrl => {
  const windowArea = {
    width: Math.floor(window.outerWidth * 0.8),
    height: Math.floor(window.outerHeight * 0.5),
  }

  if (windowArea.width < 1000) {
    windowArea.width = 1000
  }
  if (windowArea.height < 630) {
    windowArea.height = 630
  }
  windowArea.left = Math.floor(
    window.screenX + (window.outerWidth - windowArea.width) / 2
  )
  windowArea.top = Math.floor(
    window.screenY + (window.outerHeight - windowArea.height) / 8
  )

  const sep = myUrl.indexOf('?') !== -1 ? '&' : '?'
  const url = `${myUrl}${sep}`
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
          authWindow.close()
          reject('Not allowed')
        }

        if (msg.data.payload) {
          try {
            resolve(JSON.parse(msg.data.payload))
          } catch (e) {
            resolve(msg.data.payload)
          } finally {
            authWindow.close()
          }
        } else {
          authWindow.close()
          reject('Unauthorised')
        }
      },
      false
    )
  })

  return authPromise
}

export default popup
