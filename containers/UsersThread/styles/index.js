import styled from 'styled-components'

// import Img from 'components/Img'
import { cs } from 'utils'

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  ${cs.media.mobile`overflow: scroll`};
`
export const Title = styled.div``

export const MapWrapper = styled.div`
  width: 100%;
  ${cs.media.mobile`width: 250%;`};
`
