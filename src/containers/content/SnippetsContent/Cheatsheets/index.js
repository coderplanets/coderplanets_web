/*
 *
 * Content
 *
 */

import React from 'react'

import { GALLERY } from '@constant'
import { nilOrEmpty } from '@utils'

import PagiFooter from '@components/PagiFooter'
import { PagiOptionSelector } from '@components/Selectors'

import { SnippetGallery, ImageGallery } from '@components/GalleryHub'

import menuData from '../tempData'
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

  // TODO:  move this logic to NaviMenu itself
  for (let index = 0; index < menuData.length; index += 1) {
    const element = menuData[index]
    if (nilOrEmpty(element.childMenu)) menuData[index].childMenu = []
  }

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
            <PagiOptionSelector
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
      <h2>Cheatsheets</h2>
      <InnerWrapper>{DisplayContent}</InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(Cheatsheets)
