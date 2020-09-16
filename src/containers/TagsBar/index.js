/*
 *
 * TagsBar
 *
 */

import React from 'react'
import T from 'prop-types'

import DesktopView from './DesktopView'
import CardView from './CardView'

const TagsBar = (props) => {
  const { view } = props
  console.log('props -> ', props)
  console.log('view: ', view)
  switch (view) {
    case 'mobile': {
      // TODO:
      return <DesktopView {...props} />
    }

    case 'community_card': {
      return <CardView {...props} />
    }

    default: {
      return <DesktopView {...props} />
    }
  }
}

TagsBar.propTypes = {
  view: T.oneOf(['desktop', 'mobile', 'community_card']),
}

TagsBar.defaultProps = {
  view: 'desktop',
}

export default TagsBar
