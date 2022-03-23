import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

type TSlipBar = {
  slipHeight: string
  width: string
  translateX: string
}

export const Wrapper = styled.nav.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  position: relative;
  overflow: hidden;
  width: auto;
  font-size: 14px;
`
export const Nav = styled.nav`
  position: relative;
  ${css.flex('align-center')};
  flex-flow: nowrap;
  margin: 0 auto;
  padding: 0;
`

export const SlipBar = styled.span<TSlipBar>`
  position: absolute;
  ${css.flex('justify-center')};
  width: ${({ width }) => width};
  bottom: 1px;
  left: 0;
  height: ${({ slipHeight }) => slipHeight};

  transform: ${({ translateX }) => `translate3d(${translateX}, 0, 0);`};
  transition: transform 0.25s;
`
type TRealBar = { width: string }
export const RealBar = styled.span<TRealBar>`
  width: ${({ width }) => width};
  height: 2px;
  /* border-radius: 3px; */
  background: ${theme('thread.articleDigest')}; // to-theme
`
// transform: ${({ active }) =>
//     active ? 'translate3d(0,0,0);' : 'translate3d(0, 150%, 0);'};
