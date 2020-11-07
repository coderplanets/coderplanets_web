import React from 'react'

import { ICON } from '@/config'
import { Wrapper, Icon, Num } from './styles/up_vote'

const UpVote = ({ num, size }) => {
  return (
    <Wrapper size={size}>
      <Icon src={`${ICON}/shape/vote-up.svg`} size={size} />
      <Num size={size}>{num}</Num>
    </Wrapper>
  )
}

export default React.memo(UpVote)
