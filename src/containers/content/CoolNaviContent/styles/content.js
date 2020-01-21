import styled from 'styled-components'

// import Img from '@components/Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  margin-top: 10px;
  min-height: 90vh;
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${cs.flexGrow()};
  /* here must be a specific number, otherwise custom scorllbar will flash */
  height: 90vh;
`
