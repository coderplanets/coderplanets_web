import { useState, useEffect } from 'react'
// import { merge } from 'ramda'

import { EVENT } from '@/constant'
import type { TID } from '@/spec'

import BStore from '@/utils/bstore'
import { Global } from '@/utils/helper'

const initState = ''

const useViewing = (): TID | null => {
  const [viewing, setViewing] = useState(initState)

  /* eslint-disable */
  useEffect(() => {
    const checkViewing = () => {
      const item = BStore.get('viewingInfo')
      setViewing(item)
    }

    Global.addEventListener(EVENT.VIEWING_CHANGED, checkViewing)

    return () => {
      Global.removeEventListener(EVENT.VIEWING_CHANGED, checkViewing)
    }
  }, [])

  return viewing
}

export default useViewing
