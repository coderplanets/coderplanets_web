import { FC, memo } from 'react'

import FakeBrowser from './FakeBrowser'

import { TSetupInfoStatus } from '../spec'
import { Wrapper } from '../styles/content/setup_domain'

type TProps = {
  status: TSetupInfoStatus
}

const SetupDomain: FC<TProps> = ({ status }) => {
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

export default memo(SetupDomain)
