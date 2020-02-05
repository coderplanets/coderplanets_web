/*
 *
 * Banner
 *
 */

import React from 'react'

import { buildLog } from '@utils'

// import SearchBox from './SearchBox'
import SelectType from './SelectType'
import SetupDomain from './SetupDomain'

import { Wrapper } from '../styles/banner'
import { LN } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesBanner')

const Banner = ({ step, communityType }) => {
  const { STEP } = LN
  let stepComp

  switch (step) {
    case STEP.SELECT_TYPE: {
      stepComp = <SelectType communityType={communityType} />
      break
    }
    default: {
      stepComp = <SetupDomain />
    }
  }

  return <Wrapper testid="communities-banner">{stepComp}</Wrapper>
}

export default Banner
