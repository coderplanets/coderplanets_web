/*
 *
 * Banner
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

// import SearchBox from './SearchBox'
import SelectType from './SelectType'
import SetupDomain from './SetupDomain'
import SetupInfo from './SetupInfo'

import { Wrapper } from '../styles/banner'
import type {
  TStep,
  TSelectTypeStatus,
  TSetupDomainStatus,
  TSetupInfoStatus,
} from '../spec'
import { STEP } from '../constant'

/* eslint-disable-next-line */
const log = buildLog('C:CreateCommunityBanner')

type TProps = {
  step: TStep
  selectTypeStatus: TSelectTypeStatus
  setupDomainStatus: TSetupDomainStatus
  setupInfoStatus: TSetupInfoStatus
}

const Banner: FC<TProps> = ({
  step,
  selectTypeStatus,
  setupDomainStatus,
  setupInfoStatus,
}) => {
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

  return <Wrapper testid="create-community-digest">{stepComp}</Wrapper>
}

export default memo(Banner)
