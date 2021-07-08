import { FC, memo } from 'react'
import { useAccount } from '@/hooks'

import { ReadedLabel } from './styles'
import type { TProps } from './index'

const ReadLabel: FC<TProps> = ({ entry, topOffset = '20px' }) => {
  const account = useAccount()

  const { viewerHasViewed } = entry
  const {
    isLogin,
    user: {
      customization: { markViewed },
    },
  } = account

  if (!isLogin) return null
  if (markViewed && viewerHasViewed) {
    return <ReadedLabel topOffset={topOffset} />
  }

  return null
}

export default memo(ReadLabel)
