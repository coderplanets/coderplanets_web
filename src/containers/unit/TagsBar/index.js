/*
 *
 * TagsBar
 *
 */

import React from 'react'
import T from 'prop-types'

import { VIEW } from '@/constant'

import DesktopView from './DesktopView/index'
import CardView from './CardView'

const TagsBar = (props) => {
  const { view } = props
  switch (view) {
    case VIEW.MOBILE: {
      // TODO:
      return <DesktopView {...props} />
    }

    case VIEW.COMMUNITY_CARD: {
      return <CardView {...props} />
    }

    default: {
      return <DesktopView {...props} />
    }
  }
}

TagsBar.propTypes = {
  view: T.oneOf([VIEW.DESKTOP, VIEW.MOBILE, VIEW.COMMUNITY_CARD]),
}

TagsBar.defaultProps = {
  view: VIEW.DESKTOP,
}

export default TagsBar
