import styled from 'styled-components'

// import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')}
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${cs.flexColumn('align-center', 'justify-between')};
  margin-top: 25px;
  margin-bottom: 40px;
  padding: 15px 25px;
  width: 100%;
  min-height: 88vh;
  /* max-width: ; */
  max-width: ${`calc(${cs.ARTICLE_PAGE_MAX_CONTENT_WIDTH} + 100px)`};
  border-radius: 8px;
  background: ${theme('haveADrinkPage.bg')};
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px;
`

export const LoadingSentence = styled.div`
  font-size: 18px;
  color: ${theme('thread.articleTitle')};
`
