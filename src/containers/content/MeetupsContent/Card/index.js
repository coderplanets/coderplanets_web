import React from 'react'
import T from 'prop-types'

import { GALLERY } from '@/constant'

import TextCard from './TextCard'
import TextWithImgCard from './TextWithImgCard'

const Card = ({ item, type }) => {
  return type === GALLERY.TEXT_ONLY ? (
    <TextCard item={item} />
  ) : (
    <TextWithImgCard item={item} />
  )
}

Card.propTypes = {
  type: T.oneOf([GALLERY.TEXT_ONLY, GALLERY.TEXT_WITH_IMAGE]),
}

Card.defaultProps = {
  type: GALLERY.TEXT_ONLY,
}

export default React.memo(Card)
