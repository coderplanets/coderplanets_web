import { FC, memo } from 'react'
import { useAccount } from '@/hooks'

import { ReadedLabel } from './styles'
import type { TProps } from './index'

const ReadLabel: FC<TProps> = ({ entry, topOffset = '20px' }) => {
  const account = useAccount()

  const { viewerHasViewed } = entry
  const { isLogin, c11n } = account

  if (!isLogin) return null
  if (c11n.markViewed && viewerHasViewed) {
    return <ReadedLabel topOffset={topOffset} />
  }

  return null
}

export default memo(ReadLabel)
