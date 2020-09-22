import styled from 'styled-components'

import { cs } from '@/utils'

import { getShadowBackground, getShadowSize, getScrollbarThin } from './metrics'
import { WrapperBase, ScrollWrapperBase, ShadowBarBase } from './index'

export const Wrapper = styled(WrapperBase)`
  .os-theme-dark > .os-scrollbar-horizontal,
  .os-theme-light > .os-scrollbar-horizontal {
    height: ${({ barSize }) =>
      `${getScrollbarThin(barSize, 'horizontal')} !important`};
  }
`
export const ScrollWrapper = styled(ScrollWrapperBase)``

export const InnerWrapper = styled.div`
  ${cs.flex()};
  width: 100%;
  height: ${({ innerHeight }) => innerHeight};
  box-sizing: content-box;
`

const ShadowBar = styled(ShadowBarBase)`
  top: 1%;
  height: ${({ height }) => `calc(${height} - 2%)`};
  width: ${({ shadowSize }) => getShadowSize(shadowSize)};
  background: ${({ shadowSize }) =>
    getShadowBackground(shadowSize, 'horizontal')};
  border-left: ${({ withBorder }) => (withBorder ? '1px solid' : 'none')};
  border-color: ${({ withBorder }) => (withBorder ? '#084255' : 'none')};
`
export const LeftShadowBar = styled(ShadowBar)`
  left: 0px;
  z-index: 2;
`
export const RightShadowBar = styled(ShadowBar)`
  right: 0;
  transform: rotate(180deg);
`
