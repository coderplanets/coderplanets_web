import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div`
  /* 
   * magic number, if set 100% the map will jump in laptop screen 
   */
  width: 98%;
  position: relative;
  ${css.media.mobile`overflow: scroll`};
`
export const Title = styled.div``

export const MapWrapper = styled.div`
  /* 
   * magic number, if set 100% the map will jump in laptop screen 
   */
  width: 99%;
  ${css.media.mobile`width: 250%;`};
`
