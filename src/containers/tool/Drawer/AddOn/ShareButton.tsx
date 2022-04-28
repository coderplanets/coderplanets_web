import { FC, memo } from 'react'

import { shareTo } from '@/utils/helper'
import IconButton from '@/widgets/Buttons/IconButton'

const ShareButton: FC = () => {
  return (
    <IconButton
      onClick={shareTo}
      path="article/share.svg"
      size={15}
      mTop={15}
      mRight={13}
      mLeft={-1}
      hint="分享内容"
      hintPlacement="bottom"
      dimWhenIdle
    />
  )
}

export default memo(ShareButton)
