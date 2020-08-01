import React from 'react'

import FakeBrowser from './FakeBrowser'
import { Wrapper } from '../styles/content/setup_domain'

const SetupDomain = ({ status }) => {
  const { domainValue: domain, titleValue: title, descValue: desc } = status
  return (
    <Wrapper>
      <FakeBrowser
        domain={domain}
        showContent
        title={title || '社区名称'}
        desc={desc || '社区一句话描述'}
      />
    </Wrapper>
  )
}

export default React.memo(SetupDomain)
