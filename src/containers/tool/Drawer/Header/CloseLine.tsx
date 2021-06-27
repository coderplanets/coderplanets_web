import { FC } from 'react'

import { Wrapper, LeftLine, RightLine } from '../styles/header/close_line'

import { closeDrawer } from '../logic'

type TProps = {
  curve: boolean
}

const CloseLine: FC<TProps> = ({ curve }) => {
  return (
    <Wrapper onClick={() => closeDrawer()}>
      <LeftLine curve={curve} />
      <RightLine curve={curve} />
    </Wrapper>
  )
}

export default CloseLine
