import { FC, memo } from 'react'

import IconButton from '@/widgets/Buttons/IconButton'

const ShareButton: FC = () => {
  return (
    <IconButton
      path="article/share.svg"
      size={19}
      mTop={7}
      mLeft={-1}
      hint="分享本文"
      hintPlacement="bottom"
      dimWhenIdle
    />
  )
}

export default memo(ShareButton)
