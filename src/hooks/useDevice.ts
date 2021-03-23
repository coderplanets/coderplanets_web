import { useEffect, useState } from 'react'
import { isMobile as detectMobile } from '@/utils'

type TDevice = {
  isMobile: boolean
}

const useDevice = (): TDevice => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(detectMobile)
  }, [isMobile]) // Empty array ensures that effect is only run on mount and unmount

  return { isMobile }
}

export default useDevice
