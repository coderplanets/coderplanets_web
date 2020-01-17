import styled from 'styled-components'

import { cs, theme } from '@utils'
import Img from '@Img'

// import Img from '@components/Img'

export const Wrapper = styled.div`
  margin-top: 45px;
  ${cs.flexColumn('justify-center')};
`
export const SubscribedBox = styled.div`
  color: ${theme('baseColor.green')};
  font-weight: bold;
`

export const BtnWrapper = styled.div`
  ${cs.flex('align-center')};
`

export const PrefixIcon = styled(Img)`
  fill: ${({ primary }) =>
    primary ? theme('button.primary') : theme('button.fg')};
  width: 14px;
  height: 14px;
  margin-right: 3px;
  display: block;
`
export const Text = styled.div``
