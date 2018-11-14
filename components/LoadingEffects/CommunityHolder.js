import React from 'react'
import PropTypes from 'prop-types'

import { BannerWrapper, BannerText } from './styles/community_holder'

const CommunityHolder = ({ place, text }) => {
  switch (place) {
    case 'sidebar': {
      return <span>{text.slice(0, 1)}</span>
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
