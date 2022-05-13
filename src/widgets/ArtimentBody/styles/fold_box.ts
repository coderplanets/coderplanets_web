import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

type TWrapper = { fold: boolean; mode: 'article' | 'comment' }
export const Wrapper = styled.div<TWrapper>`
  ${css.flex('align-end', 'justify-center')};
  width: 100%;
  /* width: ${({ mode }) => (mode === 'article' ? '100%' : '95%')}; */
  position: relative;
  margin-top: -50px;
  margin-bottom: 28px;
  background: ${({ fold }) =>
    fold
      ? 'linear-gradient(0deg,rgb(255 255 255 / 60%) 52%,rgb(255 255 255 / 0%) 80%)'
      : 'transparent'};
  height: 80px;
  /* border: 1px solid; */
  padding-bottom: 5px;

  ${css.media.mobile`
    margin-top: 18px;
    margin-bottom: 18px;
  `};

  transition: all 0.2s;
`
export const Hint = styled.div<{ mode: 'article' | 'comment' }>`
  ${css.flex('align-center')};
  color: ${theme('thread.extraInfo')};
  font-size: ${({ mode }) => (mode === 'article' ? '15px' : '13px')};
  padding-right: 5%;
  font-weight: bold;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  transition: all 0.2s;
`
export const FoldHint = styled(Hint)`
  opacity: 0;
`
export const ArrowIcon = styled(Img)<{ reverse?: boolean }>`
  ${css.size(18)};
  fill: ${theme('thread.extraInfo')};
  transform: ${({ reverse }) => (reverse ? 'rotate(90deg)' : 'rotate(-90deg)')};
  margin-left: 4px;
  opacity: 0.8;

  ${Hint}:hover {
    opacity: 1;
  }
`
