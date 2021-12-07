import { FC, memo } from 'react'

import { Wrapper, Shape, ArrowIcon } from './styles/pull_button'

type TProps = {
  isPulled: boolean
  onClick: () => void
}

const PullButton: FC<TProps> = ({ onClick, isPulled }) => {
  return (
    <Wrapper onClick={onClick}>
      <ArrowIcon isPulled={isPulled} />
      <Shape />
    </Wrapper>
  )
}

export default memo(PullButton)
