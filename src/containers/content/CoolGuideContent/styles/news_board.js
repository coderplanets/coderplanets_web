import styled from 'styled-components'

// import Img from '@Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  width: 100%;
`
export const NewsWrapper = styled.div`
  width: 100%;
  height: 90vh;
`
export const NewsInnerWrapper = styled.div`
  ${cs.flex()};
  height: 100%;
`
export const FooterWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 60px;
`
