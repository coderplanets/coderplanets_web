/*
 *
 * Content
 *
 */

import { FC, memo } from 'react'

import { GUIDE } from '@/constant'
import Pagi from '@/widgets/Pagi'

import {
  ProductGallery,
  PeopleGallery,
  ImageGallery,
} from '@/widgets/GalleryHub'

import SearchCover from './SearchCover'
import Footer from './Footer'

import { Wrapper, InnerWrapper, NormalListWrapper } from './styles/content'

type TProps = {
  displayType: string
}

const Content: FC<TProps> = ({ displayType }) => {
  let DisplayContent

  switch (displayType) {
    case GUIDE.PREVIEW: {
      DisplayContent = (
        <NormalListWrapper>
          <SearchCover />
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

export default memo(Content)
