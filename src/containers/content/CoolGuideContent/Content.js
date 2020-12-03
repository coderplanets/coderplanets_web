/*
 *
 * Content
 *
 */

import React from 'react'

import { GUIDE } from '@/constant'
import Pagi from '@/components/Pagi'

import {
  DirectoryGallery,
  ProductGallery,
  PeopleGallery,
  ImageGallery,
} from '@/components/GalleryHub'

// tmp
// import RoadmapThread from '@/containers/thread/RoadmapThread'
import menuData from '@/components/NaviMenu/menuData'
import Footer from './Footer'
// import NormalList from './NormalList'
import { Wrapper, InnerWrapper, NormalListWrapper } from './styles/content'

const Content = ({ displayType }) => {
  let DisplayContent

  switch (displayType) {
    case GUIDE.PREVIEW: {
      DisplayContent = (
        <NormalListWrapper>
          <DirectoryGallery items={menuData} />
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
          <PeopleGallery />
          <Pagi margin={{ top: '40px', bottom: '60px' }} />
          <Footer />
          <br />
        </NormalListWrapper>
      )
      break
    }

    case GUIDE.DEVELOPER: {
      DisplayContent = (
        <NormalListWrapper>
          <PeopleGallery type="developer" />
          <br />
          <Footer />
          <br />
          <br />
        </NormalListWrapper>
      )
      break
    }

    default: {
      DisplayContent = (
        <NormalListWrapper>
          <ProductGallery />
          <Pagi margin={{ top: '40px', bottom: '60px' }} />
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
