import styled from 'styled-components'

import type { TActive, TSpace } from '@/spec'
import css, { theme } from '@/utils/css'

export const Row = styled.div`
  ${css.flex('align-center')};
`
export const Br = styled.div<TSpace>`
  margin-top: ${({ top }) => `${top}px` || 0};
  margin-bottom: ${({ bottom }) => `${bottom}px` || 0};
`
export const Space = styled.span<TSpace>`
  margin-left: ${({ left }) => `${left}px` || 0};
  margin-right: ${({ right }) => `${right}px` || 0};
`
export const SpaceGrow = styled.div`
  flex-grow: 1;
`
export const Divider = styled.div<TSpace>`
  border-top: 1px solid;
  border-top-color: ${theme('border')};
  width: 100%;
  margin-top: ${({ top }) => `${top === undefined ? 20 : top}px`};
  margin-bottom: ${({ bottom }) => `${bottom === undefined ? 20 : bottom}px`};
`

type TLineDivider = TSpace & { height?: number }
export const LineDivider = styled.div<TLineDivider>`
  background: ${theme('thread.articleDigest')};
  opacity: 0.6;
  width: 1px;
  height: ${({ height }) => `${height || 12}px`};

  margin-left: ${({ left }) => `${left || 15}px`};
  margin-right: ${({ right }) => `${right || 15}px`};
`
// see https://stackoverflow.com/questions/27900053/css-transition-with-visibility-not-working
export const FadeToggle = styled.div<TActive>`
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: visibility 0.3s linear, opacity 0.3s linear;
`

export const Inline = styled.div<TSpace>`
  display: inline-block;
  margin-left: ${({ left }) => `${left || 0}px`};
  margin-right: ${({ right }) => `${right || 0}px`};
`
