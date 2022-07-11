import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  padding-left: 20px;
  padding-right: 90px;
`
export const BaseSection = styled.section`
  /* margin: 0 50px; */
  padding-bottom: 30px;
  /* border-bottom: 1px solid;
  border-bottom-color: ${theme('border')}; */
`
export const TitleBase = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  margin-bottom: 12px;
`

export const BlockBase = styled.div<TActive>`
  opacity: ${({ $active }) => ($active ? 0.7 : 0.2)};
  box-shadow: ${({ $active }) =>
    $active ? 'rgb(0 0 0 / 7%) 0px 0px 24px' : ''};

  border: 1px solid;
  border-radius: 7px;
  border-color: ${theme('thread.articleTitle')};
  padding: 16px 15px;

  &:hover {
    opacity: ${({ $active }) => ($active ? 0.65 : 0.3)};
    cursor: pointer;
  }

  transition: all 0.2s;
`

// base shapes
type TBar = { long: number; thin?: boolean }
export const Bar = styled.div<TBar>`
  width: ${({ long }) => `${long || 10}%`};
  height: ${({ thin }) => (thin ? '4px' : '10px;')};
  background: ${({ thin }) =>
    thin ? theme('thread.articleDigest') : theme('thread.articleTitle')};
  z-index: 3;
  border-radius: 5px;
  opacity: ${({ thin }) => (thin ? 0.6 : 1)};
`

export const Circle = styled.div<{ radius?: number }>`
  ${({ radius }) => `${css.circle(radius || 22)}`};
  background: ${theme('thread.articleTitle')};
`
