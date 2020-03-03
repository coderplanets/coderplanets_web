import React from 'react'

import { ICON_CMD } from '@config'
import { prettyNum } from '@utils'

import { Wrapper, Icon } from '../styles/todo_list/up_vote'

const UpVote = ({ num }) => (
  <Wrapper>
    <div>
      <Icon src={`${ICON_CMD}/arrow-up-o.svg`} />
    </div>
    <div>{prettyNum(num)}</div>
  </Wrapper>
)

export default React.memo(UpVote)
