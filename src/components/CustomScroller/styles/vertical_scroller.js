import styled from 'styled-components'

// import { css } from '@/utils'
import { WrapperBase, ScrollWrapperBase, ShadowBarBase } from './index'
import { getShadowBackground, getShadowSize, getScrollbarThin } from './metrics'

export const Wrapper = styled(WrapperBase)`
  position: relative;

  .os-host:not(:hover) {
    visibility: ${({ showOnHover }) => (showOnHover ? 'hidden' : 'inherit')};
  }

  .os-theme-dark > .os-scrollbar-vertical,
  .os-theme-light > .os-scrollbar-vertical {
    width: ${({ barSize }) =>
      `${getScrollbarThin(barSize, 'vertical')} !important`};
  }
`
export const ScrollWrapper = styled(ScrollWrapperBase)``
const ShadowBar = styled(ShadowBarBase)`
  left: 0px;
  height: ${({ shadowSize }) => getShadowSize(shadowSize)};
  width: 100%;
  background: ${({ shadowSize }) =>
    getShadowBackground(shadowSize, 'vertical')};
  border-top: ${({ withBorder }) => (withBorder ? '1px solid' : 'none')};
  border-color: ${({ withBorder }) => (withBorder ? '#084255' : 'none')};
`
export const TopShadowBar = styled(ShadowBar)`
  top: 0;
  z-index: 2;
`
export const BottomShadowBar = styled(ShadowBar)`
  bottom: 0;
  transform: rotate(180deg);
`
