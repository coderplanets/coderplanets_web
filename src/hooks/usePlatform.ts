import { useState, useEffect } from 'react'
import { merge } from 'ramda'

import type { TPlatform } from '@/spec'
import { Global } from '@/utils/helper'

const initPlatform = {
  isChrome: true,
  isFirefox: false,
  isSafari: false,
  isIE: false,
  isEdge: false,
  isMacOS: false,
  isMobile: false,
}

// see https://stackoverflow.com/questions/49328382/browser-detection-in-reactjs/49328524
const usePlatform = (/* { breakpoint } */): TPlatform => {
  const [platform, setPlatform] = useState(initPlatform)

  /* eslint-disable */
  useEffect(() => {
    // Firefox 1.0+
    // @ts-ignore
    const isFirefox = typeof InstallTrigger !== 'undefined'

    // Safari 3.0+ "[object HTMLElementConstructor]"
    const isSafari =
      /constructor/i.test(Global.HTMLElement) ||
      (function (p) {
        return p.toString() === '[object SafariRemoteNotification]'
      })(
        !Global.safari ||
          // @ts-ignore
          (typeof safari !== 'undefined' && safari.pushNotification),
      )

    // Internet Explorer 6-11
    // @ts-ignore
    const isIE = /*@cc_on!@*/ false || !!document.documentMode

    // Edge 20+
    const isEdge = !isIE && !!Global.StyleMedia

    // Chrome 1 - 71
    const isChrome =
      !!Global.chrome && (!!Global.chrome.webstore || !!Global.chrome.runtime)

    const isMacOS = Global.navigator.appVersion.indexOf('Mac') != -1
    /* eslint-enable */

    const isMobile = Global.innerWidth <= 800

    setPlatform(
      merge(initPlatform, {
        isFirefox,
        isSafari,
        isIE,
        isEdge,
        isChrome,
        isMacOS,
        isMobile,
      }),
    )
  }, [])

  return platform
}

export default usePlatform
