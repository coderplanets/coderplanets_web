import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  cursor: pointer;
`
export const ArrowIcon = styled(Img)<{ reverse?: boolean }>`
  ${css.size(14)};
  fill: ${theme('thread.articleDigest')};
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
  }

  transition: all 0.2s;
`
export const Text = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-left: 8px;

  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
  }

  transition: all 0.2s;
`
