import styled from 'styled-components'

import Img from '@/Img'
// import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div<{ fold: boolean }>`
  ${css.flex('align-both')};
  width: 100%;
  margin-top: 28px;
  margin-bottom: 28px;
  padding: 5px 0;
  border-radius: 15px;
  background: ${({ fold }) => (fold ? '#00333e' : 'transparent')};

  &:hover {
    cursor: pointer;
    background: #00333e;
  }

  transition: all 0.1s;
`
export const Hint = styled.div`
  ${css.flex('align-center')};
  color: #139c9e;
  font-size: 15px;
  margin-left: -3%;
  opacity: 0.8;
  ${Wrapper}:hover & {
    opacity: 1;
  }
`
export const FoldHint = styled(Hint)`
  opacity: 0;
`
export const ArrowIcon = styled(Img)<{ reverse?: boolean }>`
  ${css.size(20)};
  fill: #139c9e;
  transform: ${({ reverse }) => (reverse ? 'rotate(90deg)' : 'rotate(-90deg)')};
  margin-left: 4px;
`
