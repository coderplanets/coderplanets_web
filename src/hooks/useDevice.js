import { useEffect, useState } from 'react'
import { isMobile as detectMobile } from '@/utils'

const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(detectMobile)
  }, [isMobile]) // Empty array ensures that effect is only run on mount and unmount

  return { isMobile }
}

export default useDevice
