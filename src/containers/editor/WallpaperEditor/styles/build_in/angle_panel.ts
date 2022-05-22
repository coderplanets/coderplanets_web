import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

const metric = {
  bottom: {
    rotate: '270deg',
  },
  top: {
    rotate: '90deg',
  },
  left: {
    rotate: '0deg',
  },
  right: {
    rotate: '180deg',
  },
}

export const Wrapper = styled.div`
  ${css.circle(54)};
  border: 1px solid;
  border-color: ${theme('border')};
  position: relative;
  margin-top: 12px;
  margin-left: 5px;
`
export const NeedleDot = styled.div`
  ${css.circle(4)};
  background: ${theme('thread.articleTitle')};
  position: absolute;
  left: 25px;
  top: 24px;
`
export const Needle = styled.div<{ direction: string }>`
  position: absolute;
  width: 25px;
  height: 1px;
  background: ${theme('thread.articleTitle')};
  top: 25px;
  left: 2px;

  transform: ${({ direction }) => `rotate(${metric[direction].rotate}) `};
  transform-origin: right;
`
const Point = styled.div<TActive>`
  position: absolute;
  font-size: 8px;
  ${css.circle(16)};
  ${css.flex('align-both')};
  z-index: 2;

  font-weight: ${({ $active }) => ($active ? 600 : 'bormal')};
  background: ${({ $active }) =>
    $active ? theme('thread.articleTitle') : theme('border')};
  color: ${({ $active }) =>
    !$active ? theme('thread.articleTitle') : 'white'};

  &:hover {
    background: ${theme('thread.articleDigest')};
    font-weight: 600;
    cursor: pointer;
    color: white;
  }
`
export const Top = styled(Point)`
  top: -7px;
  left: 19px;
`
export const Bottom = styled(Point)`
  bottom: -8px;
  left: 19px;
`
export const Left = styled(Point)`
  top: 18px;
  left: -8px;
`
export const Right = styled(Point)`
  top: 18px;
  right: -8px;
`
