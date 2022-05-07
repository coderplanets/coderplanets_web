import { FC, memo } from 'react'

import IconButton from '@/widgets/Buttons/IconButton'
import { closeDrawer } from '../logic'

const CloseButton: FC = () => {
  return (
    <IconButton icon="close" onClick={closeDrawer} top={4} size={20} left={6} />
  )
}

export default memo(CloseButton)
