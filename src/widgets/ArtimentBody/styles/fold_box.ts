import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

type TWrapper = { fold: boolean; mode: 'article' | 'comment' }
export const Wrapper = styled.div<TWrapper>`
  ${css.flex('align-both')};
  width: ${({ mode }) => (mode === 'article' ? '100%' : '96%')};
  margin-top: 28px;
  margin-bottom: 28px;
  padding: 5px 0;
  border-radius: 15px;
  background: ${({ fold }) => (fold ? '#F5F5F5' : 'transparent')};

  &:hover {
    cursor: pointer;
    background: #f5f5f5;
  }

  ${css.media.mobile`
    margin-top: 18px;
    margin-bottom: 18px;
  `};

  transition: all 0.2s;
`
export const Hint = styled.div<{ mode: 'article' | 'comment' }>`
  ${css.flex('align-center')};
  color: ${theme('article.extraInfo')};
  font-size: ${({ mode }) => (mode === 'article' ? '15px' : '13px')};
  opacity: 0.8;

  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: all 0.2s;
`
export const FoldHint = styled(Hint)`
  opacity: 0;
`
export const ArrowIcon = styled(Img)<{ reverse?: boolean }>`
  ${css.size(18)};
  fill: ${theme('article.extraInfo')};
  transform: ${({ reverse }) => (reverse ? 'rotate(90deg)' : 'rotate(-90deg)')};
  margin-left: 4px;
`
