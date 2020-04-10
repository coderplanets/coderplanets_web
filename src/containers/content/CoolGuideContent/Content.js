/*
 *
 * Content
 *
 */

import React from 'react'

import { nilOrEmpty } from '@utils'
import { GUIDE } from '@constant'
import PagiFooter from '@components/PagiFooter'

import {
  DirectoryGallery,
  ProductGallery,
  FamePeopleGallery,
  ImageGallery,
} from '@components/GalleryHub'

// tmp
// import RoadmapThread from '@containers/thread/RoadmapThread'
import menuData from '@components/NaviMenu/menuData'
import Footer from './Footer'
// import NormalList from './NormalList'
import { Wrapper, InnerWrapper, NormalListWrapper } from './styles/content'
import { directoryOnChange } from './logic'

const Content = ({ displayType }) => {
  let DisplayContent

  for (let index = 0; index < menuData.length; index += 1) {
    const element = menuData[index]
    if (nilOrEmpty(element.childMenu)) menuData[index].childMenu = []
  }

  switch (displayType) {
    case GUIDE.PREVIEW: {
      DisplayContent = (
        <NormalListWrapper>
          <DirectoryGallery items={menuData} onSelect={directoryOnChange} />
          <br />
          <Footer />
          <br />
          <br />
        </NormalListWrapper>
      )
      break
    }
    case GUIDE.IMAGE: {
      DisplayContent = <ImageGallery />
      break
    }
    case GUIDE.FAME_PEOPLE: {
      DisplayContent = (
        <NormalListWrapper>
          <FamePeopleGallery />
          <PagiFooter margin={{ top: '40px', bottom: '60px' }} />
          <Footer />
          <br />
        </NormalListWrapper>
      )
      break
    }

    default: {
      DisplayContent = (
        <NormalListWrapper>
          <ProductGallery />
          <PagiFooter margin={{ top: '40px', bottom: '60px' }} />
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
