/*
 *
 * Content
 *
 */

import React from 'react'

import { GALLERY } from '@constant'

import PagiFooter from '@components/PagiFooter'
import { PagiOptionSwitcher } from '@components/Switcher'

import { SnippetGallery, ImageGallery } from '@components/GalleryHub'

import Footer from '../Footer'

import { Wrapper, InnerWrapper, NormalListWrapper } from '../styles/snippets'
import { galleryTypeOnChange } from '../logic'

// tmp
const tmpItems = [
  {
    // iconSrc: `${ICON_CMD}/extra_tag.svg`,
    localIcon: GALLERY.MAIN_COLUMN,
    key: GALLERY.MAIN_COLUMN,
  },
  {
    // iconSrc: `${ICON_CMD}/city_map.svg`,
    localIcon: GALLERY.MASONRY_COLUMN,
    key: GALLERY.MASONRY_COLUMN,
  },
  {
    // iconSrc: `${ICON_CMD}/money_yuan.svg`,
    localIcon: GALLERY.THREE_COLUMN,
    key: GALLERY.THREE_COLUMN,
  },
]

const Content = ({ galleryType }) => {
  let DisplayContent

  switch (galleryType) {
    case 'todo': {
      DisplayContent = <ImageGallery />
      break
    }

    default: {
      DisplayContent = (
        <NormalListWrapper>
          <SnippetGallery />
          <PagiFooter margin={{ top: '40px', bottom: '60px' }}>
            <PagiOptionSwitcher
              activeKey={galleryType}
              title="显示模式"
              items={tmpItems}
              onChange={galleryTypeOnChange}
            />
          </PagiFooter>
          <Footer />
          <br />
        </NormalListWrapper>
      )
      break
    }
  }

  return (
    <Wrapper>
      <InnerWrapper>{DisplayContent}</InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(Content)
