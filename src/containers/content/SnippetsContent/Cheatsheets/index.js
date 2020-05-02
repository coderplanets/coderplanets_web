/*
 *
 * Content
 *
 */

import React from 'react'

import { GALLERY } from '@constant'

import Pagi from '@components/Pagi'
import { PagiOptionSwitcher } from '@components/Switcher'

import { SnippetGallery, ImageGallery } from '@components/GalleryHub'

import Footer from '../Footer'

import { Wrapper, InnerWrapper, NormalListWrapper } from '../styles/cheatsheets'
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

const Cheatsheets = ({ galleryType }) => {
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
          <Pagi margin={{ top: '40px', bottom: '60px' }}>
            <PagiOptionSwitcher
              activeKey={galleryType}
              title="显示模式"
              items={tmpItems}
              onChange={galleryTypeOnChange}
            />
          </Pagi>
          <Footer />
          <br />
        </NormalListWrapper>
      )
      break
    }
  }

  return (
    <Wrapper>
      <h2>Cheatsheets</h2>
      <InnerWrapper>{DisplayContent}</InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(Cheatsheets)
