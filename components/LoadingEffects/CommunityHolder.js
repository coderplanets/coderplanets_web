import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import {
  BannerWrapper,
  BannerText,
  SidebarText,
} from './styles/community_holder'

const CommunityHolder = ({ place, text }) => {
  switch (place) {
    case 'sidebar': {
      return <SidebarText>{R.toUpper(text.slice(0, 1))}</SidebarText>
    }
    default: {
      return (
        <BannerWrapper>
          <BannerText>{text}</BannerText>
        </BannerWrapper>
      )
    }
  }
}

CommunityHolder.propTypes = {
  text: PropTypes.string.isRequired,
  place: PropTypes.oneOf(['banner', 'sidebar']),
}

CommunityHolder.defaultProps = {
  place: 'banner',
}

export default CommunityHolder
