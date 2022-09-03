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
import NoticeBar from '@/widgets/NoticeBar'

import HomeCover from './HomeCover'
import Footer from './Footer'

import { Wrapper, InnerWrapper, NormalListWrapper } from './styles/content'

type TProps = {
  displayType: string
}

const Content: FC<TProps> = ({ displayType }) => {
  let DisplayContent

  switch (displayType) {
    case GUIDE.HOME: {
      DisplayContent = (
        <NormalListWrapper>
          <HomeCover />
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
          <PeopleGallery />
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
          <Pagi margin={{ top: '20px', bottom: '20px' }} />
          <Footer />
          <br />
        </NormalListWrapper>
      )
      break
    }
  }

  return (
    <Wrapper>
      {displayType !== GUIDE.HOME && (
        <NoticeBar
          type="info"
          content="当前条目仅作无分类无立场 UI 展示，协作编辑系统、模板等功能仍在开发调试中，欢迎任何形式的参与。"
          bottom={15}
          right={10}
        />
      )}
      <InnerWrapper>{DisplayContent}</InnerWrapper>
    </Wrapper>
  )
}

export default memo(Content)
