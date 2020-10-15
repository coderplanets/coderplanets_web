import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.nav.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  position: relative;
  overflow: hidden;
  width: auto;
  font-size: 14px;
`
export const Nav = styled.nav`
  position: relative;
  ${css.flex('align-center')};
  flex-flow: row wrap;
  margin: 0 auto;
  padding: 0;
`
export const SlipBar = styled.span`
  position: absolute;
  ${css.flex('justify-center')};
  width: ${({ width }) => width};
  bottom: 1px;
  left: 0;
  height: ${({ slipHeight }) => slipHeight};

  transform: ${({ translateX }) => `translate3d(${translateX}, 0, 0);`};
  transition: transform 0.25s;
`
export const RealBar = styled.span`
  width: ${({ width }) => width};
  height: 3px;
  background: #327faf;
`
// transform: ${({ active }) =>
//     active ? 'translate3d(0,0,0);' : 'translate3d(0, 150%, 0);'};
