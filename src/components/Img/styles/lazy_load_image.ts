import styled from 'styled-components'

import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  position: relative;
  z-index: ${css.zIndex.img};
`
export const FallbackWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`
