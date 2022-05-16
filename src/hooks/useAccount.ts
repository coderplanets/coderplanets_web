import { useState, useEffect } from 'react'
// import { merge } from 'ramda'

import { EVENT } from '@/constant'
import type { TAccount } from '@/spec'

import BStore from '@/utils/bstore'
import { Global } from '@/utils/helper'

const initState = {}

const useAccount = (): TAccount | null => {
  const [account, setAccountInfo] = useState(initState)

  /* eslint-disable */
  useEffect(() => {
    function checkAccount() {
      const item = BStore.get('accountInfo')

      if (item) {
        setAccountInfo(item)
      }
    }

    Global.addEventListener(EVENT.SESSION_CHANGED, checkAccount)

    return () => {
      Global.removeEventListener(EVENT.SESSION_CHANGED, checkAccount)
    }
  }, [])

  return account
}

export default useAccount
