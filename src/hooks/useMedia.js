import { useState, useEffect } from 'react'
import { merge } from 'ramda'

import { Global, css, debounce } from '@/utils'

const defaultMedia = {
  mobile: false,
  tablet: false,
  laptop: false,
  desktop: false,
}

const useMedia = (/* { breakpoint } */) => {
  const [media, setMedia] = useState(defaultMedia)

  useEffect(() => {
    const handleResize = () => {
      // console.log('mediaBreakPoints: ', css.mediaBreakPoints)
      const { innerWidth } = Global

      if (innerWidth <= css.mediaBreakPoints.mobile) {
        setMedia(merge(defaultMedia, { mobile: true }))
      } else if (
        innerWidth > css.mediaBreakPoints.mobile &&
        innerWidth <= css.mediaBreakPoints.tablet
      ) {
        setMedia(merge(defaultMedia, { tablet: true }))
      } else if (
        innerWidth > css.mediaBreakPoints.tablet &&
        innerWidth <= css.mediaBreakPoints.laptop
      ) {
        setMedia(merge(defaultMedia, { laptop: true }))
      } else {
        setMedia(merge(defaultMedia, { desktop: true }))
      }
    }

    // handleResize()
    const checkHandler = debounce(handleResize, 200)

    Global.addEventListener('resize', checkHandler)
    Global.addEventListener('load', checkHandler)

    return () => {
      Global.removeEventListener('resize', checkHandler)
      Global.removeEventListener('load', checkHandler)
    }
  }, [])

  return media
}

export default useMedia
