import styled from 'styled-components'

import { TTestable, TActive } from '@/types'
import Img from '@/Img'
import { theme, css } from '@/utils'

// see https://stackoverflow.com/questions/6794000/fixed-position-but-relative-to-container
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & TActive>`
  ${css.flexColumn('align-start', 'justify-start')};
  position: fixed;
  width: 170px;
  left: 16%;
  top: 10%;
  transform: translateX(-50%);
  font-size: 13px;
  opacity: ${({ show }) => (show ? '1' : '0')}; */
  transition: opacity 0.2s;

  ${css.media.desktopL`
    left: 22%;
  `}

  ${css.media.laptopL`
    left: 12%;
  `}
`
export const ArticleTitle = styled.div`
  color: ${theme('thread.articleDigest')};
  word-break: break-all;
`
export const BackWrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 8px;
  margin-left: -4px;
`
export const ArrowIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(16)};
`
export const BackText = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 12px;
  margin-left: 5px;
  cursor: pointer;
  margin-top: 1px;
`
