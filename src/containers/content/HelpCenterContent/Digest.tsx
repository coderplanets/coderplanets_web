import { FC } from 'react'

import type { TCommunity, TMetric } from '@/spec'

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
  metric: TMetric
}

const Digest: FC<TProps> = ({ metric, community }) => {
  return (
    <Wrapper metric={metric}>
      <InnerWrapper metric={metric}>
        <BreadCrumbs>
          <Community>
            <CommunityLogo src={community.logo} />
            <CommunityTitle href={`/${community.raw}`}>
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
