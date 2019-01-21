import styled from 'styled-components'

import { cs, theme } from 'utils'
// import Img from 'components/Img'

export const Wrapper = styled.div`
  margin-top: 45px;
  ${cs.flexColumn('justify-center')};
`
export const SubscribedBox = styled.div`
  color: ${theme('baseColor.green')};
  font-weight: bold;
`
