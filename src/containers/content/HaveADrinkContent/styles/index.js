import styled from 'styled-components'

// import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')}
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${css.flexColumn('align-center', 'justify-between')};
  margin-top: 25px;
  margin-bottom: 40px;
  padding: 15px 25px;
  width: 100%;
  min-height: 88vh;
  /* max-width: ; */
  max-width: ${`calc(${css.ARTICLE_PAGE_MAX_CONTENT_WIDTH} + 100px)`};
  border-radius: 8px;
  background: ${theme('haveADrinkPage.bg')};
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px;

  @media (max-width: 1400px) {
    max-width: ${`calc(${css.ARTICLE_PAGE_MAX_CONTENT_WIDTH})`};
  }
  @media (max-width: 1250px) {
    max-width: ${`calc(${css.ARTICLE_PAGE_MAX_CONTENT_WIDTH} - 100px)`};
  }
`

export const LoadingSentence = styled.div`
  font-size: 18px;
  color: ${theme('thread.articleTitle')};
`
