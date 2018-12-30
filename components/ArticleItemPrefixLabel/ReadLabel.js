import React from 'react'

import { ReadedLabel } from './styles'

const ReadLabel = ({ entry, accountInfo }) => {
  const { viewerHasViewed } = entry
  const {
    isLogin,
    customization: { markViewed },
  } = accountInfo

  if (!isLogin) return null
  if (markViewed && viewerHasViewed) {
    return <ReadedLabel>阅</ReadedLabel>
  }

  return null
}

export default ReadLabel
