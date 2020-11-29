import React from 'react'

import { ICON } from '@/config'
import { Wrapper, Icon, Title } from '../../styles/editor/header/deleter'

import { toggleSubTitle } from '../../logic'

const Deleter = () => {
  return (
    <Wrapper onClick={() => toggleSubTitle(false)}>
      <Icon src={`${ICON}/shape/delete.svg`} />
      <Title>移除</Title>
    </Wrapper>
  )
}

export default React.memo(Deleter)
