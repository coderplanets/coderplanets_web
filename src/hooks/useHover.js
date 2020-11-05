import React, { useRef, useState } from 'react'

const canHover = () =>
  typeof window !== 'undefined'
    ? !window.matchMedia('(hover: none)').matches
    : false

const useHover = (ref, options) => {
  const { enterDelay, leaveDelay } = options
  const timeout = useRef()
  const [hovering, setHovering] = useState(false)

  const toggle = (which) => {
    if (!canHover()) return
    const delay = which ? enterDelay : leaveDelay
    window.clearTimeout(timeout.current)

    if (delay) {
      timeout.current = window.setTimeout(() => setHovering(which), delay)
    } else {
      setHovering(which)
    }
  }

  const el = ref?.current

  if (el) {
    console.log('binding')
    el.addEventListener('mouseenter', () => toggle(true))
    el.addEventListener('mouseleave', () => toggle(false))
  }

  // Cleans up timeout on unmount
  React.useEffect(
    () => () => {
      window.clearTimeout(timeout.current)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return hovering
}

export default useHover
