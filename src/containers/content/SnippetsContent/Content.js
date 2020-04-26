/*
 *
 * Content
 *
 */

import React from 'react'

import { ICON_CMD } from '@config'
import { nilOrEmpty } from '@utils'
import { SNIPPET } from '@constant'

import PagiFooter from '@components/PagiFooter'
import { PagiOptionSelector } from '@components/Selectors'

import { SnippetGallery, ImageGallery } from '@components/GalleryHub'

import menuData from './tempData'
import Footer from './Footer'

import { Wrapper, InnerWrapper, NormalListWrapper } from './styles/content'
import { displayTypeOnChange } from './logic'

// tmp
const tmpItems = [
  {
    iconSrc: `${ICON_CMD}/extra_tag.svg`,
    key: SNIPPET.DEFAULT,
  },
  {
    iconSrc: `${ICON_CMD}/city_map.svg`,
    key: SNIPPET.LIST,
  },
  {
    iconSrc: `${ICON_CMD}/money_yuan.svg`,
    key: SNIPPET.MASONRY,
  },
]

const Content = ({ displayType }) => {
  let DisplayContent

  // TODO:  move this logic to NaviMenu itself
  for (let index = 0; index < menuData.length; index += 1) {
    const element = menuData[index]
    if (nilOrEmpty(element.childMenu)) menuData[index].childMenu = []
  }

  switch (displayType) {
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
              activeKey={displayType}
              title="视图选择"
              items={tmpItems}
              onChange={displayTypeOnChange}
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
