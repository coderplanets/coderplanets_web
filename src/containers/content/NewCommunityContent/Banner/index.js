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
import SetupInfo from './SetupInfo'

import { Wrapper } from '../styles/banner'
import { LN } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesBanner')

const Banner = ({
  step,
  selectTypeStatus,
  setupDomainStatus,
  setupInfoStatus,
}) => {
  const { STEP } = LN
  let stepComp

  switch (step) {
    case STEP.SELECT_TYPE: {
      stepComp = <SelectType status={selectTypeStatus} />
      break
    }
    case STEP.SETUP_INFO: {
      stepComp = <SetupInfo status={setupInfoStatus} />
      break
    }
    default: {
      stepComp = <SetupDomain status={setupDomainStatus} />
    }
  }

  return <Wrapper testid="communities-banner">{stepComp}</Wrapper>
}

export default React.memo(Banner)
