import { useState, useEffect } from 'react'
import { merge } from 'ramda'

import { Global, cs, debounce } from '@/utils'

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
      // console.log('mediaBreakPoints: ', cs.mediaBreakPoints)
      const { innerWidth } = Global

      if (innerWidth <= cs.mediaBreakPoints.mobile) {
        setMedia(merge(defaultMedia, { mobile: true }))
      } else if (
        innerWidth > cs.mediaBreakPoints.mobile &&
        innerWidth <= cs.mediaBreakPoints.tablet
      ) {
        setMedia(merge(defaultMedia, { tablet: true }))
      } else if (
        innerWidth > cs.mediaBreakPoints.tablet &&
        innerWidth <= cs.mediaBreakPoints.laptop
      ) {
        setMedia(merge(defaultMedia, { laptop: true }))
      } else {
        setMedia(merge(defaultMedia, { desktop: true }))
      }
    }

    handleResize()
    Global.addEventListener('resize', debounce(handleResize, 200))

    return () => {
      Global.removeEventListener('resize', handleResize)
    }
  }, [])

  return media
}

export default useMedia
