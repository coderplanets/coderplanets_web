import React from 'react'

import { ICON } from '@/config'
import { Wrapper, Icon, Title } from '../../styles/editor/header/adder'

import { toggleSubTitle } from '../../logic'

const Adder = () => {
  return (
    <Wrapper onClick={() => toggleSubTitle(true)}>
      <Icon src={`${ICON}/shape/add.svg`} />
      <Title>副标题</Title>
    </Wrapper>
  )
}

export default React.memo(Adder)
