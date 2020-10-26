import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn('align-start', 'justify-start')};
  position: fixed;
  width: 170px;
  top: 98px;
  left: 55px;
  font-size: 13px;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.25s;
`
export const ArticleTitle = styled.div`
  color: ${theme('thread.articleDigest')};
  word-break: break-all;
`
export const BackWrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 8px;
  margin-left: -4px;
`
export const ArrowIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 16px;
  height: 16px;
  display: block;
`
export const BackText = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 12px;
  margin-left: 5px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`
