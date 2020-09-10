import { useState, useEffect } from 'react'
import { merge } from 'ramda'

import { debounce } from '@/utils'

const initState = {
  direction: 'up', // 'down'
  scrollPos: 0,
}

// detect the scroll direction
// see https://codepen.io/lehollandaisvolant/pen/ryrrGx?editors=1010
const useScroll = (cb) => {
  const [scroll, setScroll] = useState(initState)

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
        merge(initState, {
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

  return scroll
}

export default useScroll
