import styled, { css as styledCss } from 'styled-components'

import type { TActive } from '@/spec'
import css, { animate } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div<TActive>`
  ${css.flex('align-both')};
  height: 130px;
  width: 100%;
  position: relative;

  animation: ${({ active }) =>
    active ? styledCss`${animate.jump} 3s linear infinite alternate` : ''};

  filter: ${({ active }) => (active ? 'saturate(1)' : 'saturate(0.5)')};
`

const color = {
  beam: '#00CAF9',
}

const Star = styled(Img)<TActive>`
  position: absolute;
  ${css.size(20)};
  fill: ${color.beam};
  display: ${({ active }) => (active ? 'block' : 'none')};
`
export const Star1 = styled(Star)<TActive>`
  top: 0;
  left: -30px;
  opacity: 0.6;
  animation: ${({ active }) =>
    active ? styledCss`${animate.jump} 4s linear infinite alternate` : ''};
`
export const Star2 = styled(Star)<TActive>`
  ${css.size(16, false)};
  top: 50px;
  left: -80px;
  opacity: 0.8;
  animation: ${({ active }) =>
    active ? styledCss`${animate.jump} 5.5s linear infinite alternate` : ''};
`
export const Star3 = styled(Star)<TActive>`
  top: 80px;
  right: -80px;
  opacity: 0.5;
  animation: ${({ active }) =>
    active ? styledCss`${animate.blink} 3s linear infinite alternate` : ''};
`
