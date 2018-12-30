import React from 'react'

import { ReadedLabel } from './styles'

const ReadLabel = ({ entry, accountInfo, topOffset }) => {
  const { viewerHasViewed } = entry
  const {
    isLogin,
    customization: { markViewed },
  } = accountInfo

  if (!isLogin) return null
  if (markViewed && viewerHasViewed) {
    return <ReadedLabel topOffset={topOffset}>阅</ReadedLabel>
  }

  return null
}

export default ReadLabel
