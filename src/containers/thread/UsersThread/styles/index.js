import styled from 'styled-components'

// import Img from '@components/Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  /* 
   * magic number, if set 100% the map will jump in laptop screen 
   */
  width: 98%;
  position: relative;
  ${cs.media.mobile`overflow: scroll`};
`
export const Title = styled.div``

export const MapWrapper = styled.div`
  /* 
   * magic number, if set 100% the map will jump in laptop screen 
   */
  width: 99%;
  ${cs.media.mobile`width: 250%;`};
`
