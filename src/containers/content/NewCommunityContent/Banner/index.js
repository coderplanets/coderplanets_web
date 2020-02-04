/*
 *
 * Banner
 *
 */

import React from 'react'

import { buildLog } from '@utils'

// import SearchBox from './SearchBox'
import SelectType from './SelectType'

import { Wrapper } from '../styles/banner'

// import { searchOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesBanner')

const Banner = ({ communityType }) => {
  return (
    <Wrapper testid="communities-banner">
      <SelectType communityType={communityType} />
    </Wrapper>
  )
}

export default Banner
