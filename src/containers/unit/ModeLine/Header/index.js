import React from 'react'

import { useMedia } from '@/hooks'

const Header = () => {
  const { mobile } = useMedia()

  if (mobile) return null

  // TODO:
  return <div>header view</div>
}

export default Header
