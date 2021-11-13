import { FC, memo } from 'react'

import FakeBrowser from './FakeBrowser'

import { TSetupInfoStatus, TCommunityType } from '../spec'
import { Wrapper } from '../styles/content/setup_domain'

type TProps = {
  status: TSetupInfoStatus
  communityType: TCommunityType
}

const SetupInfo: FC<TProps> = ({ status, communityType }) => {
  const { raw, title, desc, logo } = status

  return (
    <Wrapper>
      <FakeBrowser
        domain={raw}
        communityType={communityType}
        title={title || '// 社区名称'}
        desc={desc || '// 社区一句话描述'}
        logo={logo}
        showContent
      />
    </Wrapper>
  )
}

export default memo(SetupInfo)
