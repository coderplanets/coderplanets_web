import React from 'react'

import { ICON } from '@/config'
import { prettyNum } from '@/utils'

import { Wrapper, Icon } from '../styles/todo_list/up_vote'

const UpVote = ({ num }) => (
  <Wrapper>
    <div>
      <Icon src={`${ICON}/shape/vote-up.svg`} />
    </div>
    <div>{prettyNum(num)}</div>
  </Wrapper>
)

export default React.memo(UpVote)
