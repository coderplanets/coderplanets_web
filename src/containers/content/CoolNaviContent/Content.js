/*
 *
 * Content
 *
 */

import React from 'react'

import { NAVI } from '@constant'

import PagiFooter from '@components/PagiFooter'
import { ProductList, FamePeopleList } from '@components/IntroList'

import NewsBoard from './NewsBoard'
import Footer from './Footer'
// import NormalList from './NormalList'

import { Wrapper, InnerWrapper, NormalListWrapper } from './styles/content'

const Content = ({ displayType }) => {
  let DisplayContent

  switch (displayType) {
    case NAVI.NEWS_FEED: {
      DisplayContent = <NewsBoard />
      break
    }

    case NAVI.FAME_PEOPLE: {
      DisplayContent = (
        <NormalListWrapper>
          <FamePeopleList />
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
          <ProductList />
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
