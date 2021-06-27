import { FC, memo } from 'react'

import { ReadedLabel } from './styles'

import type { TProps } from './index'

const ReadLabel: FC<TProps> = ({ entry, accountInfo, topOffset = '20px' }) => {
  const { viewerHasViewed } = entry
  const {
    isLogin,
    customization: { markViewed },
  } = accountInfo

  if (!isLogin) return null
  if (markViewed && viewerHasViewed) {
    return <ReadedLabel topOffset={topOffset} />
  }

  return null
}

export default memo(ReadLabel)
