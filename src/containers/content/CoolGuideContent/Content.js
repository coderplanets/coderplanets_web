/*
 *
 * Content
 *
 */

import React from 'react'

import { GUIDE } from '@constant'

import PagiFooter from '@components/PagiFooter'
import {
  ProductGallery,
  FamePeopleGallery,
  ImageGallery,
  MasonryGallery,
} from '@components/GalleryHub'

// tmp
// import RoadmapThread from '@containers/thread/RoadmapThread'

// import NewsBoard from './NewsBoard'
import Footer from './Footer'
// import NormalList from './NormalList'

import { Wrapper, InnerWrapper, NormalListWrapper } from './styles/content'

const Content = ({ displayType }) => {
  let DisplayContent

  switch (displayType) {
    case GUIDE.NEWS_FEED: {
      // DisplayContent = <NewsBoard />
      DisplayContent = <MasonryGallery />
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
