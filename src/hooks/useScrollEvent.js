import { useState, useEffect } from 'react'
import { merge } from 'ramda'

import { debounce } from '@/utils'

const inialState = {
  direction: 'up', // 'down'
  scrollPos: 0,
}

// detect the scroll derection
// see https://codepen.io/lehollandaisvolant/pen/ryrrGx?editors=1010
const useScrollEvent = (cb) => {
  const [sroll, setScroll] = useState(inialState)

  /* eslint-disable */
  useEffect(() => {
    // adding scroll event
    let scrollPos = scroll.scrollPos
    const handleScroll = debounce(function () {
      // detects new state and compares it with the new one
      let direction =
        document.body.getBoundingClientRect().top > scrollPos ? 'up' : 'down'

      // saves the new position for iteration.
      scrollPos = document.body.getBoundingClientRect().top

      if (cb) cb()

      setScroll(
        merge(inialState, {
          direction,
          scrollPos,
        }),
      )
    }, 50)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return sroll
}

export default useScrollEvent
