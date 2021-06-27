import { FC } from 'react'

// import { METRIC } from '@/constant'

import type { TCommunity } from '@/spec'

import {
  Wrapper,
  InnerWrapper,
  BreadCrumbs,
  Community,
  CommunityLogo,
  CommunityTitle,
  Slash,
  HelpTitle,
} from './styles/digest'

type TProps = {
  community: TCommunity
  metric: string
}

const Digest: FC<TProps> = ({ metric, community }) => {
  return (
    <Wrapper metric={metric}>
      <InnerWrapper metric={metric}>
        <BreadCrumbs>
          <Community>
            <CommunityLogo src={community.logo} />
            <CommunityTitle href={`/${community.raw}/posts`}>
              {community.title}
            </CommunityTitle>
          </Community>
          <Slash>/</Slash>
          <HelpTitle>帮助中心</HelpTitle>
        </BreadCrumbs>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Digest
