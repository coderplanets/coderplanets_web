import { FC, memo } from 'react'

import IconButton from '@/components/Buttons/IconButton'
import { closeDrawer } from '../logic'

const CloseButton: FC = () => {
  return (
    <IconButton
      path="shape/close.svg"
      onClick={closeDrawer}
      size={26}
      dimWhenIdle
    />
  )
}

export default memo(CloseButton)
