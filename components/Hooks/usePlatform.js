import { useState, useEffect } from 'react'
import R from 'ramda'

import { Global } from '@utils'

const inialPlatform = {
  isChrome: true,
  isFirefox: false,
  isSafari: false,
  isIE: false,
  isEdge: false,
  isMacOS: false,
}

// see https://stackoverflow.com/questions/49328382/browser-detection-in-reactjs/49328524
const usePlatform = (/* { breakpoint } */) => {
  const [platform, setPlatform] = useState(inialPlatform)

  /* eslint-disable */
  useEffect(() => {
    // Firefox 1.0+
    const isFirefox = typeof InstallTrigger !== 'undefined'

    // Safari 3.0+ "[object HTMLElementConstructor]"
    const isSafari =
      /constructor/i.test(Global.HTMLElement) ||
      (function(p) {
        return p.toString() === '[object SafariRemoteNotification]'
      })(
        !Global.safari ||
          (typeof safari !== 'undefined' && safari.pushNotification)
      )

    // Internet Explorer 6-11
    const isIE = /*@cc_on!@*/ false || !!document.documentMode

    // Edge 20+
    const isEdge = !isIE && !!Global.StyleMedia

    // Chrome 1 - 71
    const isChrome =
      !!Global.chrome && (!!Global.chrome.webstore || !!Global.chrome.runtime)

    const isMacOS = Global.navigator.appVersion.indexOf('Mac') != -1
    /* eslint-enable */

    setPlatform(
      R.merge(inialPlatform, {
        isFirefox,
        isSafari,
        isIE,
        isEdge,
        isChrome,
        isMacOS,
      })
    )

    return () => {}
  }, [])

  return platform
}

export default usePlatform
