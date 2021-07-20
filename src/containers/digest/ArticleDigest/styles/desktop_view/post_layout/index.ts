import styled from 'styled-components'

import { theme, css, WIDTH } from '@/utils'

export const Main = styled.div<{ metric: string }>`
  ${({ metric }) => css.fitContentWidth(metric)};
  width: 100%;
`
export const SubWrapper = styled.div`
  ${css.flex('align-start', 'justify-center')};
  width: ${WIDTH.ARTICLE.STICKER};
  margin-top: 33px;

  ${css.media.laptopL`
    width: ${WIDTH.ARTICLE.STICKER_LAPTOPL};
  `}
`
export const Title = styled.div`
  font-size: 26px;
  color: ${theme('thread.articleTitle')};
  margin-bottom: 30px;
`
export const BottomInfo = styled.div`
  ${css.flex('align-end', 'justify-between')};
  margin-top: 15px;
  padding-bottom: 45px;
  border-bottom: 1px solid;
  border-bottom-color: #004251;
  width: 100%;
  color: ${theme('thread.articleDigest')};
`
export const AuthorName = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
