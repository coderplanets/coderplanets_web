import styled from 'styled-components'
import Tippy from '@tippyjs/react'

import css, { theme, zIndex } from '@/utils/css'

export const StyledTippy = styled(Tippy)`
  position: relative;
  background: ${theme('popover.bg')};
  color: ${theme('thread.articleDigest')};
  box-shadow: ${theme('popover.boxShadow')};
  outline: none;
  max-width: 480px !important;
  border: 1px solid;
  border-color: ${theme('popover.borderColor')};

  border-radius: 5px;
  padding: 5px;

  box-shadow: -3px 2px 20px 0px rgb(58 58 58 / 15%);
  border-color: #dfdfdf;

  .tippy-arrow {
    display: none;
  }
`
export const NoPaddingStyledTippy = styled(StyledTippy)`
  padding: 0;

  .tippy-content {
    padding: 0;
  }
`
type TContentWrapper = { contentHeight: string; forceZIndex: boolean }
export const ChildrenWrapper = styled.div<TContentWrapper>`
  position: relative;
  height: ${({ contentHeight }) => contentHeight};
  z-index: ${({ forceZIndex }) => (forceZIndex ? 1 : 0)};
`
export const ContentWrapper = styled.div<{ hasMaxWidth: boolean }>`
  max-width: ${({ hasMaxWidth }) => (hasMaxWidth ? '180px' : 'auto')};
`
const Arrow = styled.div`
  position: absolute;
  ${css.circle(4)};
  z-index: ${zIndex.popover};
  background: #2d7eb1;
  box-shadow: ${theme('popover.boxShadow')};
`
export const TopArrow = styled(Arrow)`
  top: calc(100% + 4px);
  left: calc(50% - 2px);
`
export const BottomArrow = styled(Arrow)`
  bottom: calc(100% + 4px);
  left: calc(50% - 2px);
`
export const LeftArrow = styled(Arrow)`
  top: calc(50% - 2px);
  left: calc(100% + 4px);
`
