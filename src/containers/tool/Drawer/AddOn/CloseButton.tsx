import { FC, memo } from 'react'

import IconButton from '@/widgets/Buttons/IconButton'
import { closeDrawer } from '../logic'

const CloseButton: FC = () => {
  return <IconButton icon="close" onClick={closeDrawer} size={21} dimWhenIdle />
}

export default memo(CloseButton)
