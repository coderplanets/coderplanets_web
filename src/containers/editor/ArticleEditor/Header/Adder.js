import React from 'react'

import { ICON } from '@/config'
import { Wrapper, Icon, Title } from '../styles/header/adder'

const Adder = () => {
  return (
    <Wrapper>
      <Icon src={`${ICON}/shape/add.svg`} />
      <Title>副标题</Title>
    </Wrapper>
  )
}

export default React.memo(Adder)
