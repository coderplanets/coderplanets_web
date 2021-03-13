import styled from 'styled-components'

import { TActive } from '@/spec'
import { animate, theme, css } from '@/utils'
import Img from '@/Img'

export const SelectBox = styled.div`
  ${css.flex('align-center')};

  margin-top: 10px;
  border: 1px solid;
  border-color: ${theme('banner.desc')};
  border-radius: 4px;
  background: ${theme('modal.innerSelectBg')};
  height: 90px;

  background-image: linear-gradient(#51abb2 2px, transparent 2px),
    linear-gradient(90deg, #51abb200 2px, transparent 2px),
    linear-gradient(#5eabb333 1px, transparent 1px),
    linear-gradient(90deg, #5eabb336 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
`

export const ChuanChuanIcon = styled(Img)`
  width: 55px;
  height: 55px;
`

export const Selectors = styled.div`
  ${css.flex()};
`
export const By = styled.div`
  ${css.flex('align-both')};

  ${css.size(40)};
  font-size: 1.6rem;
  color: ${theme('font')};
  margin-left: -10px;
`

export const Circle = styled.div<TActive>`
  ${css.flex('align-both')};
  ${css.circle(38)};
  border: 1px solid;
  border-color: ${theme('font')};
  margin-right: 10px;
  color: ${({ active }) => (active ? 'white' : '#51abb2')};
  background-color: ${({ active }) => (active ? theme('font') : '')};
  &:hover {
    cursor: pointer;
    animation: ${animate.pulse} 0.4s linear;
  }
  transition: background-color 0.3s ease-out;
`
