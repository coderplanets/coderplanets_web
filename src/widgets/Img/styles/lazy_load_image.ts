import styled from 'styled-components'

import css, { zIndex } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  position: relative;
  z-index: ${zIndex.img};
`
export const FallbackWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`
