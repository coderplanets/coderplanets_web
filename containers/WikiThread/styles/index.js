import styled from 'styled-components'

import { Button } from 'antd'

// import Img from '../../../components/Img'
import { cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  width: 100%;
`
export const LeftPadding = styled.div`
  width: 3vw;
`
export const RightPadding = styled.div`
  width: 4vw;
`
export const LeftPart = styled.div`
  flex-grow: 1;
  width: 100%;
`
export const WikiWrapper = styled.div`
  width: 90%;
`
export const RightPart = styled.div`
  ${cs.flexColumn('align-center')};
  width: 25vw;
  margin-left: 30px;
  padding-top: 5px;
`
export const PublishBtn = styled(Button)`
  width: 100%;
  max-width: 220px;
  margin-top: 10px;
`
