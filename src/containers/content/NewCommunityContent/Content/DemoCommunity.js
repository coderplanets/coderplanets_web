/*
 *
 * DemoCommunity
 *
 */

import React from 'react'

import { ICON_BASE } from '@config'
import { buildLog } from '@utils'

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
  return (
    <Wrapper>
      <Community>
        <Logo src={`${ICON_BASE}/${type}/${title}.png`} />
        <Title>{title}</Title>
      </Community>
    </Wrapper>
  )
}

export default DemoCommunity
