import { useState, useEffect } from 'react'
// import { merge } from 'ramda'

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

    Global.addEventListener('storage', checkAccount)

    return () => {
      Global.removeEventListener('storage', checkAccount)
    }
  }, [])

  return account
}

export default useAccount
