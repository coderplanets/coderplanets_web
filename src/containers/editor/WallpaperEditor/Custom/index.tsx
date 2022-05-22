import { FC, memo } from 'react'

import UploadBox from './UploadBox'
import { Wrapper } from '../styles/custom'

const Custom: FC = () => {
  return (
    <Wrapper>
      <UploadBox />
    </Wrapper>
  )
}

export default memo(Custom)
