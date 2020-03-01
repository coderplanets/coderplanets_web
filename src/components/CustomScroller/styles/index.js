import styled from 'styled-components'

import { cs } from '@utils'

import { getShadowBackground, getShadowWidth } from './helpers'

export const Wrapper = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`
export const ScrollWrapper = styled.div`
  ${cs.flex()};
  width: 100%;
  height: 100%;
`
export const InnerWrapper = styled.div`
  ${cs.flex()};
  width: 100%;
  height: 100%;
  box-sizing: content-box;
`

const ShadowBar = styled.div`
  position: absolute;
  top: 0;
  /* todo */
  height: ${({ height }) => height};
  width: ${({ shadowSize }) => getShadowWidth(shadowSize)};
  /* todo */
  background: ${({ shadowSize }) => getShadowBackground(shadowSize)};
  border-left: 1px solid;
  border-color: #084255;
  z-index: 1;
  opacity: 0;

  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 0.5s;
`
export const LeftShadowBar = styled(ShadowBar)`
  left: 0px;
  z-index: 2;
`
export const RightShadowBar = styled(ShadowBar)`
  right: 0;
  transform: rotate(180deg);
`
