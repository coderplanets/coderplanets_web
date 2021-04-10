import styled from 'styled-components'
import Tippy from '@tippyjs/react'

import { css, theme } from '@/utils'

export const StyledTippy = styled(Tippy)`
  position: relative;
  background: ${theme('popover.bg')};
  border: 1px solid;
  border-color: ${theme('popover.borderColor')};
  color: ${theme('thread.articleDigest')};
  box-shadow: ${theme('popover.boxShadow')};
  outline: none;
  max-width: 480px !important;

  border-radius: 5px;
  padding: 10px;

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
export const ContentWrapper = styled.div<{ contentHeight: string }>`
  position: relative;
  height: ${({ contentHeight }) => contentHeight};
`
const Arrow = styled.div`
  position: absolute;
  ${css.circle(4)};
  z-index: ${css.zIndex.popover};
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
