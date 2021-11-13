import { FC, memo } from 'react'

import FakeBrowser from './FakeBrowser'

import type { TSetupDomainStatus } from '../spec'
import { Wrapper } from '../styles/content/setup_domain'

type TProps = {
  status: TSetupDomainStatus
}

const SetupDomain: FC<TProps> = ({ status }) => {
  const { domainValue: domain } = status
  return (
    <Wrapper>
      <FakeBrowser domain={domain} />
    </Wrapper>
  )
}

export default memo(SetupDomain)
