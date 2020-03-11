import styled from 'styled-components'

import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  margin-bottom: 20px;
`
export const WarnMsgWrapper = styled.div`
  font-size: 0.8rem;
`
export const WarnMsgItem = styled.div`
  ${cs.flex('align-start')};
`
export const WarnMsgIcon = styled(Img)`
  fill: ${theme('alertWarn.text')};
  width: 16px;
  height: 16px;
  margin-right: 5px;
  margin-top: 2px;
  opacity: 0.8;
`
export const WarnMsgText = styled.div``
