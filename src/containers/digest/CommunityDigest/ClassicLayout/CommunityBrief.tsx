import { FC, memo } from 'react'
import dynamic from 'next/dynamic'
import { contains } from 'ramda'

import type { TCommunity } from '@/spec'
import { ICON_CMD } from '@/config'
import { HCN, NON_FILL_COMMUNITY } from '@/constant'

import ExpandTexts from '../ExpandTexts'
import SocialList from '../SocialList'

import {
  Wrapper,
  Logo,
  LogoWrapper,
  CommunityInfo,
  TitleWrapper,
  Title,
  TitleText,
  LogoHolder,
} from '../styles/classic_layout/community_brief'

export const VerifiedSign = dynamic(() => import('@/components/VerifiedSign'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})

const CommunityLogoHolder = `${ICON_CMD}/community_logo_holder.svg`

type TProps = {
  community: TCommunity
  descExpand: boolean
}

const CommunityBrief: FC<TProps> = ({ community, descExpand }) => {
  return (
    <Wrapper descExpand={descExpand}>
      <LogoWrapper raw={community.raw}>
        {community.logo ? (
          <Logo
            noFill={contains(community.raw, NON_FILL_COMMUNITY)}
            src={community.logo}
            raw={community.raw}
          />
        ) : (
          <LogoHolder src={CommunityLogoHolder} />
        )}
      </LogoWrapper>
      <CommunityInfo>
        <TitleWrapper>
          <Title descExpand={descExpand}>
            <TitleText>{community.title}</TitleText>
            <VerifiedSign />
          </Title>
        </TitleWrapper>
        {/* <Desc>{community.desc}</Desc> */}
        <ExpandTexts descExpand={descExpand} desc={community.desc} />
        {community.raw !== HCN && <SocialList />}
      </CommunityInfo>
    </Wrapper>
  )
}

export default memo(CommunityBrief)
