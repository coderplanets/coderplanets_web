/*
 *
 * CommunityBanner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ICON_ASSETS } from '../../config'
import { makeDebugger, storePlug } from '../../utils'

import Tabber from '../../components/Tabber'
import NumbersInfo from './NumbersInfo'

import * as logic from './logic'

import {
  BannerContainer,
  BannerContentWrapper,
  TabberWrapper,
  CommunityWrapper,
  CommunityLogo,
  CommunityInfo,
  Title,
  Desc,
  LogoHolder,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:CommunityBanner')
/* eslint-enable no-unused-vars */

const CommunityLogoHolder = `${ICON_ASSETS}/cmd/community_logo_holder.svg`
const CommunityBrief = ({ content }) => (
  <CommunityWrapper>
    {content.logo ? (
      <CommunityLogo src={content.logo || CommunityLogoHolder} />
    ) : (
      <LogoHolder src={CommunityLogoHolder} />
    )}
    <CommunityInfo>
      <Title>{content.title}</Title>
      <Desc>{content.desc}</Desc>
    </CommunityInfo>
  </CommunityWrapper>
)

class CommunityBannerContainer extends React.Component {
  componentWillMount() {
    const { communityBanner } = this.props
    logic.init(communityBanner)
  }

  render() {
    const { communityBanner } = this.props
    const { viewing: { community, activeThread } } = communityBanner

    return (
      <BannerContainer>
        <BannerContentWrapper>
          <CommunityBrief content={community} />
          <NumbersInfo content={community} />
          <TabberWrapper>
            <Tabber
              source={community.threads}
              onChange={logic.tabberChange}
              active={activeThread}
            />
          </TabberWrapper>
        </BannerContentWrapper>
      </BannerContainer>
    )
  }
}

export default inject(storePlug('communityBanner'))(
  observer(CommunityBannerContainer)
)
