import styled from 'styled-components'
import Tippy from '@tippy.js/react'

// import Img from '@Img'
import { theme } from '@utils'

export const Wrapper = styled(Tippy)`
  position: relative;
  background: ${theme('popover.bg')};
  border: 1px solid;
  border-color: ${theme('popover.borderColor')};
  color: ${theme('thread.articleDigest')};
  box-shadow: ${theme('popover.boxShadow')};
  padding: 10px;

  /* margin-top: ${({ placement }) =>
    placement === 'bottom' ? '6px' : '0'}; */
  /* margin-bottom: ${({ placement }) =>
    placement === 'top' ? '6px' : '0'}; */

  border-radius: 5px;

  &[data-placement^='top'] {
    .tippy-arrow {
      border-top-color: purple;
    }
  }

  /* Styling the arrow for different placements */
  /* &[x-placement^='top'] {
    .tippy-arrow {
      border-top-color: ${theme('tooltip.bg')};
    }
  }
  &[x-placement^='bottom'] {
    .tippy-arrow {
      border-bottom-color: ${theme('tooltip.bg')};
    }
  }
  &[x-placement^='left'] {
    .tippy-arrow {
      border-left-color: ${theme('tooltip.bg')};
    }
  }
  &[x-placement^='right'] {
    .tippy-arrow {
      border-right-color: ${theme('tooltip.bg')};
    }
  } */
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
