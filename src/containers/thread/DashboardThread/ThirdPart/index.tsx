import { FC, memo } from 'react'

import { Wrapper } from '../styles/third_part'

type TProps = {
  testid?: string
}

const ThirdPart: FC<TProps> = ({ testid = 'third-part' }) => {
  return (
    <Wrapper>
      <div>ThirdPart</div>
    </Wrapper>
  )
}

export default memo(ThirdPart)
