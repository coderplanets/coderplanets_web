import React from 'react'
import { ReadedLabel } from './styles'

export const getOpacity = (entry, active, accountInfo) => {
  const {
    isLogin,
    customization: { markViewed },
  } = accountInfo
  const { viewerHasViewed } = entry

  if (active.id) {
    return entry.id !== active.id ? 0.6 : 1
  }
  if (isLogin && markViewed && viewerHasViewed) {
    return 0.85
  }

  return 1
}

export const renderReadMark = (entry, accountInfo) => {
  const { viewerHasViewed } = entry
  const {
    isLogin,
    customization: { markViewed },
  } = accountInfo

  if (!isLogin) return null
  if (markViewed && viewerHasViewed) {
    return <ReadedLabel>已读</ReadedLabel>
  }

  return null
}
