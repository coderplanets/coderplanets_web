import { FC, memo } from 'react'

import { Wrapper } from '../styles/basic_info'

type TProps = {
  testid?: string
}

const BasicInfo: FC<TProps> = ({ testid = 'BasicInfo' }) => {
  return (
    <Wrapper>
      <div>BasicInfo</div>
    </Wrapper>
  )
}

export default memo(BasicInfo)
