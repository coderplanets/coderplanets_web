import React from 'react'
import T from 'prop-types'

import DeveloperGallery from './DeveloperGallery'
import FamePeopleGallery from './FamePeopleGallery'

const PeopleGallery = ({ type, ...restProps }) => {
  switch (type) {
    case 'developer': {
      return <DeveloperGallery {...restProps} />
    }
    default: {
      return <FamePeopleGallery {...restProps} />
    }
  }
}

PeopleGallery.propTypes = {
  type: T.oneOf(['developer', 'famous']),
}

PeopleGallery.defaultProps = {}

export default React.memo(PeopleGallery)
