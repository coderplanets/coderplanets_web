import React from 'react'

import FakeBrowser from './FakeBrowser'
import { Wrapper } from '../styles/content/setup_domain'

const SetupDomain = ({ status }) => {
  const { domainValue: domain } = status
  return (
    <Wrapper>
      <FakeBrowser domain={domain} />
    </Wrapper>
  )
}

export default React.memo(SetupDomain)
