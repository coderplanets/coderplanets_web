import { FC, memo } from 'react'

import FakeBrowser from './FakeBrowser'

import type { TSetupDomainStatus } from '../spec'
import { STEP } from '../constant'
import { Wrapper } from '../styles/content/setup_domain'

type TProps = {
  status: TSetupDomainStatus
}

const SetupDomain: FC<TProps> = ({ status }) => {
  const { raw } = status

  return (
    <Wrapper>
      <FakeBrowser domain={raw} step={STEP.SETUP_DOMAIN} />
    </Wrapper>
  )
}

export default memo(SetupDomain)
