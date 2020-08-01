import React from 'react'
import T from 'prop-types'
import { toUpper } from 'ramda'

import {
  BannerWrapper,
  BannerText,
  CommunitiesText,
  SidebarText,
} from './styles/community_holder'

const CommunityHolder = ({ place, text }) => {
  switch (place) {
    case 'sidebar':
      return <SidebarText>{toUpper(text.slice(0, 1))}</SidebarText>

    case 'discovery':
      return <CommunitiesText>{toUpper(text.slice(0, 2))}</CommunitiesText>

    default:
      return (
        <BannerWrapper>
          <BannerText>{text}</BannerText>
        </BannerWrapper>
      )
  }
}

CommunityHolder.propTypes = {
  text: T.string.isRequired,
  place: T.oneOf(['banner', 'sidebar', 'discovery']),
}

CommunityHolder.defaultProps = {
  place: 'banner',
}

export default React.memo(CommunityHolder)
