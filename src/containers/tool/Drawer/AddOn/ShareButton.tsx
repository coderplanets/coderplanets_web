import { FC, memo } from 'react'

import { shareTo } from '@/utils/helper'
import IconButton from '@/widgets/Buttons/IconButton'

const ShareButton: FC = () => {
  return (
    <IconButton
      onClick={() => shareTo('50%')}
      path="article/share.svg"
      size={15}
      mTop={9}
      mRight={14}
      mLeft={12}
      hint="分享内容"
      hintPlacement="bottom"
      dimWhenIdle
    />
  )
}

export default memo(ShareButton)
