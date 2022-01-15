import { FC, memo } from 'react'
import { useAccount } from '@/hooks'

import { ReadedLabel } from './styles'
import type { TProps } from './index'

const ReadLabel: FC<TProps> = ({ entry, top, left }) => {
  const accountInfo = useAccount()
  const isLogin = !!accountInfo

  if (!isLogin) return null

  const { markViewed } = accountInfo.customization
  const { viewerHasViewed } = entry

  if (markViewed && viewerHasViewed) {
    return <ReadedLabel top={top} left={left} />
  }

  return null
}

export default memo(ReadLabel)
