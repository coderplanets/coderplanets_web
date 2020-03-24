import styled from 'styled-components'
import Tippy from '@tippy.js/react'

import { theme } from '@utils'

export const StyledTippy = styled(Tippy)`
  position: relative;
  background: ${theme('popover.bg')};
  border: 1px solid;
  border-color: ${theme('popover.borderColor')};
  color: ${theme('thread.articleDigest')};
  box-shadow: ${theme('popover.boxShadow')};

  /* margin-top: ${({ placement }) =>
    placement === 'bottom' ? '6px' : '0'}; */
  /* margin-bottom: ${({ placement }) =>
    placement === 'top' ? '6px' : '0'}; */

  border-radius: 5px;
  padding: 10px;

  &[data-placement^='top'] {
    .tippy-arrow {
      border-top-color: purple;
    }
  }
`

export const NoPaddingStyledTippy = styled(StyledTippy)`
  padding: 0;
`
export const ContentWrapper = styled.div`
  position: relative;
`
export const TopArrow = styled.div`
  position: absolute;
  height: 3px;
  width: 10px;
  background: #2d7eb1;
  top: calc(100% + 8px);
  left: calc(50% - 3px);
  z-index: 10000;
`
export const BottomArrow = styled.div`
  position: absolute;
  height: 3px;
  width: 10px;
  background: #2d7eb1;
  bottom: calc(100% + 8px);
  left: calc(50% - 3px);
  z-index: 10000;
`
export const LeftArrow = styled.div`
  position: absolute;
  height: 10px;
  width: 3px;
  background: #2d7eb1;
  top: calc(50% - 3px);
  left: calc(100% + 8px);
  z-index: 10000;
`
