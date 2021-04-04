/*
 *
 * Content
 *
 */

import React from 'react'

import { GUIDE } from '@/constant'
import { mockNaviCatalogMenu } from '@/utils'

import Pagi from '@/components/Pagi'

import {
  DirectoryGallery,
  ProductGallery,
  PeopleGallery,
  ImageGallery,
} from '@/components/GalleryHub'

import Footer from './Footer'
// import NormalList from './NormalList'
import { Wrapper, InnerWrapper, NormalListWrapper } from './styles/content'

type TProps = {
  displayType: string
}

const Content: React.FC<TProps> = ({ displayType }) => {
  let DisplayContent

  switch (displayType) {
    case GUIDE.PREVIEW: {
      DisplayContent = (
        <NormalListWrapper>
          <DirectoryGallery items={mockNaviCatalogMenu()} />
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
          {/* @ts-ignore */}
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
