/*
 *
 * Content
 *
 */

import React from 'react'

import { buildLog } from '@/utils'

import SelectType from './SelectType'
import SetupDomain from './SetupDomain'
import SetupInfo from './SetupInfo'

import { Wrapper } from '../styles/content'
import { LN } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:NewDiscoveryContent')

const Content = ({
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
    case STEP.SETUP_DOMAIN: {
      stepComp = <SetupDomain status={setupDomainStatus} />
      break
    }
    case STEP.SETUP_INFO: {
      stepComp = <SetupInfo status={setupInfoStatus} />
      break
    }
    default: {
      stepComp = <div>unknow step</div>
    }
  }

  return <Wrapper>{stepComp}</Wrapper>
}

export default React.memo(Content)
