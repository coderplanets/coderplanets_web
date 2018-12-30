import React from 'react'

import { ReadedLabel, PinIcon } from './styles/prefix_label'

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

const PrefixLabel = ({ entry, accountInfo }) => {
  if (entry.pin) return <PinIcon />

  return <ReadLabel entry={entry} accountInfo={accountInfo} />
}

export default PrefixLabel
