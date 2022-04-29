import { FC, memo } from 'react'

import IconButton from '@/widgets/Buttons/IconButton'
import { closeDrawer } from '../logic'

const CloseButton: FC = () => {
  return (
    <IconButton
      icon="close"
      onClick={closeDrawer}
      size={20}
      mLeft={7}
      dimWhenIdle
    />
  )
}

export default memo(CloseButton)
