import styled from 'styled-components'

import { cs } from '@utils'

import { WrapperBase, ScrollWrapperBase, ShadowBarBase } from './index'
import { getShadowBackground, getShadowSize, getScrollbarThin } from './helpers'

export const Wrapper = styled(WrapperBase)`
  position: relative;

  .os-theme-dark > .os-scrollbar-vertical,
  .os-theme-light > .os-scrollbar-vertical {
    width: ${({ shadowSize }) =>
      `${getScrollbarThin(shadowSize, 'vertical')} !important`};
  }
`
export const ScrollWrapper = styled(ScrollWrapperBase)`
  ${cs.flex()};
`
const ShadowBar = styled(ShadowBarBase)`
  left: 0px;
  height: ${({ shadowSize }) => getShadowSize(shadowSize)};
  width: 100%;
  background: ${({ shadowSize }) =>
    getShadowBackground(shadowSize, 'vertical')};
`
export const TopShadowBar = styled(ShadowBar)`
  top: 0;
  z-index: 2;
`
export const BottomShadowBar = styled(ShadowBar)`
  bottom: 0;
  transform: rotate(180deg);
`
