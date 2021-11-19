import type {
  TGalleryDefault,
  TGalleryList,
  TGalleryMasonryCollumn,
  TGalleryMainColumn,
  TGallery2Column,
  TGallery3Column,
  TGalleryTextOnly,
  TGalleryTextWithImage,
} from '@/spec'

const GALLERY = {
  DEFAULT: 'default' as TGalleryDefault,
  LIST: 'list' as TGalleryList,
  MASONRY_COLUMN: 'masonry_column' as TGalleryMasonryCollumn,
  MAIN_COLUMN: 'main_column' as TGalleryMainColumn,
  TWO_COLUMN: 'two_column' as TGallery2Column,
  THREE_COLUMN: 'three_column' as TGallery3Column,
  TEXT_ONLY: 'text_only' as TGalleryTextOnly,
  TEXT_WITH_IMAGE: 'text_with_image' as TGalleryTextWithImage,
}

export default GALLERY
