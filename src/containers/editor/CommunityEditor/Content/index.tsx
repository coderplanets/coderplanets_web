/*
 *
 * Content
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import SelectType from './SelectType'
import SetupDomain from './SetupDomain'
import SetupInfo from './SetupInfo'
import MoreInfo from './MoreInfo'

import { Wrapper } from '../styles/content'

import type {
  TStep,
  TSelectTypeStatus,
  TSetupDomainStatus,
  TSetupInfoStatus,
} from '../spec'
import { STEP } from '../constant'

/* eslint-disable-next-line */
const log = buildLog('C:NewExploreContent')

type TProps = {
  step: TStep
  selectTypeStatus: TSelectTypeStatus
  setupDomainStatus: TSetupDomainStatus
  setupInfoStatus: TSetupInfoStatus
}

const Content: FC<TProps> = ({
  step,
  selectTypeStatus,
  setupDomainStatus,
  setupInfoStatus,
}) => {
  if (step === STEP.FINISHED) return null

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
    case STEP.MORE_INFO: {
      stepComp = <MoreInfo status={setupInfoStatus} />
      break
    }
    default: {
      stepComp = (
        <SetupInfo
          status={setupInfoStatus}
          communityType={selectTypeStatus.communityType}
        />
      )
      break
    }
  }

  return <Wrapper>{stepComp}</Wrapper>
}

export default memo(Content)
