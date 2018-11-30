import styled from 'styled-components'

import Img from '../../../components/Img'
import { cs, theme } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flexColumnGrow('align-center')};
  margin-top: 10px;
`
export const CountDesc = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const DescNumber = styled.span`
  color: ${theme('banner.title')};
  font-weight: bold;
`
export const WarningDesc = styled.div`
  margin-top: 4px;
  color: tomato;
  opacity: 0.7;
`

export const PaymentPic = styled(Img)`
  width: 200px;
  height: auto;
  display: block;
`
