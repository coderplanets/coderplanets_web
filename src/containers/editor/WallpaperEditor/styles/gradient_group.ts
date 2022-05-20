import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  width: calc(100% + 30px);
  flex-wrap: wrap;
  margin-top: 10px;
  margin-left: 1px;
`

export const Block = styled.div<TActive>`
  /* ${css.circle(35)}; */
  ${css.flex('align-both')};
  border-radius: 100%;
  /* position: relative; */
  border: 2px solid;
  border-color: ${({ $active }) =>
    $active ? theme('thread.articleDigest') : 'transparent'};
  /* padding: ${({ $active }) => ($active ? '3px' : '2px')}; */
  padding: 3px;
  margin-right: 12px;
  margin-bottom: 10px;

  &:hover {
    border-color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: border-color 0.2s linear;
`
export const ColorBall = styled.div<{ background: string }>`
  ${css.circle(30)};
  background: ${({ background }) => background || 'transparent'};
  background-size: 200px;
`
export const ActiveSign = styled.div`
  ${css.size(24)};
  background: ${theme('border')};
  position: absolute;
  top: -1px;
  right: -1px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 30px;
  z-index: 3;
  border: 1px solid;
  border-color: ${theme('thread.articleTitle')};
`
