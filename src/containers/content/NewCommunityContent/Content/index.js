/*
 *
 * Content
 *
 */

import React from 'react'

import { buildLog } from '@utils'

import SelectType from './SelectType'
import { Wrapper } from '../styles/content'

// import { searchOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:NewCommunitiesContent')

const Content = ({ communityType }) => {
  return (
    <Wrapper>
      <SelectType communityType={communityType} />
    </Wrapper>
  )
}

export default Content
