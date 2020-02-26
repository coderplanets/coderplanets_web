/*
 *
 * DemoCommunity
 *
 */

import React from 'react'

import { ICON_BASE } from '@config'
import { buildLog, Trans } from '@utils'

// import SearchBox from './SearchBox'
import {
  Wrapper,
  Community,
  Logo,
  Title,
} from '../styles/content/demo_community'

// import { searchOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:NewCommunitiesContent')

const DemoCommunity = ({ title, type = 'pl' }) => {
  const unit = type === 'city' ? 'svg' : 'png'
  return (
    <Wrapper>
      <Community>
        <Logo src={`${ICON_BASE}/${type}/${title}.${unit}`} />
        <Title>{Trans(title)}</Title>
      </Community>
    </Wrapper>
  )
}

export default React.memo(DemoCommunity)
