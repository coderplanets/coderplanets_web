import { FC, memo } from 'react'

import { Wrapper, Shape, ArrowIcon } from './styles/pull_button'

type TProps = {
  ispulled: boolean
  onClick: () => void
}

const PullButton: FC<TProps> = ({ onClick, ispulled }) => {
  return (
    <Wrapper onClick={onClick}>
      <ArrowIcon ispulled={ispulled} />
      <Shape />
    </Wrapper>
  )
}

export default memo(PullButton)
