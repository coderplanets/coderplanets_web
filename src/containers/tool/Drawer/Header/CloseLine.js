import React from 'react'

import { Wrapper, LeftLine, RightLine } from '../styles/header/close_line'

import { closeDrawer } from '../logic'

const CloseLine = ({ curve }) => {
  return (
    <Wrapper onClick={() => closeDrawer()}>
      <LeftLine curve={curve} />
      <RightLine curve={curve} />
    </Wrapper>
  )
}

export default CloseLine
