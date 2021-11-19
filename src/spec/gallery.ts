import type { TID } from '@/spec'

export type TGalleryDefault = 'default'
export type TGalleryList = 'list'
export type TGalleryMasonryCollumn = 'masonry_column'
export type TGalleryMainColumn = 'main_column'
export type TGallery2Column = 'two_column'
export type TGallery3Column = 'three_column'
export type TGalleryTextOnly = 'text_only'
export type TGalleryTextWithImage = 'text_with_image'

export type TGallery = {
  id: TID
  homeLink?: string
  title: string
  desc?: string
  icon?: string
  tags?: string[]
  // people
  birthPlace?: string
  nation?: string
  nationName?: string
  birthday?: string
  aka?: string
}
