import React from 'react'

import Intro from './Intro'
import Detail from './Detail'

import { Wrapper, Block } from '../styles/mile_stone'

const MileStone = () => {
  return (
    <Wrapper>
      <Block>
        <Intro />
        <Detail />
      </Block>
      <Block>
        <Intro />
        <Detail />
      </Block>
      <Block>
        <Intro />
        <Detail />
      </Block>
    </Wrapper>
  )
}

export default MileStone
