import { FC, memo } from 'react'

import FakeBrowser from './FakeBrowser'

import { TSetupInfoStatus, TCommunityType } from '../spec'
import { Wrapper } from '../styles/content/setup_domain'

type TProps = {
  status: TSetupInfoStatus
  communityType: TCommunityType
}

const SetupDomain: FC<TProps> = ({ status, communityType }) => {
  const { domainValue: domain, titleValue: title, descValue: desc } = status
  return (
    <Wrapper>
      <FakeBrowser
        domain={domain}
        communityType={communityType}
        title={title || '社区名称'}
        desc={desc || '社区一句话描述'}
        showContent
      />
    </Wrapper>
  )
}

export default memo(SetupDomain)
