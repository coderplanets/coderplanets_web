import React from 'react'

import type { TGALLERY_TEXT_ONLY, TGALLERY_TEXT_WITH_IMAGE } from '@/spec'
import { GALLERY } from '@/constant'

import TextCard from './TextCard'
import TextWithImgCard from './TextWithImgCard'

export type TProps = {
  type: TGALLERY_TEXT_ONLY | TGALLERY_TEXT_WITH_IMAGE
  item: {
    id?: number
    date: string
    week: string
    title: string
    company: string
    finished?: boolean
    type?: string
  }
}

const Card: React.FC<TProps> = ({ item, type = GALLERY.TEXT_ONLY }) => {
  return type === GALLERY.TEXT_ONLY ? (
    <TextCard item={item} />
  ) : (
    <TextWithImgCard item={item} />
  )
}

export default React.memo(Card)
