import styled from 'styled-components'

// import Img from '@components/Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')}
  width: 100%;
  height: 96vh;
`

export const InnerWrapper = styled.div`
  ${cs.flexColumn('align-both')}
  width: 90%;
  height: 90%;
  max-width: ${cs.ARTICLE_PAGE_MAX_CONTENT_WIDTH};
  border-radius: 8px;
  background: ${theme('thread.bg')};
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px;
`

export const Title = styled.h2`
  color: ${theme('thread.articleTitle')};
`
export const Desc = styled.p`
  color: ${theme('thread.articleDigest')};
  margin-top: 10px;
  border-top: 1px solid;
  border-top-color: #dbe6e6;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
`
