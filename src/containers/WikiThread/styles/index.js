import styled from 'styled-components'

import { Button } from 'antd'

// import Img from '@components/Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  width: 100%;
`
export const LeftPart = styled.div`
  flex-grow: 1;
  width: 100%;
`
export const WikiWrapper = styled.div`
  width: 90%;
`
export const RightPart = styled.div`
  ${cs.flexColumn('align-start')};
  width: 280px;
  margin-left: 50px;
  padding-top: 5px;
  ${cs.media.tablet`display: none;`};
`
export const PublishBtn = styled(Button)`
  width: 100%;
  max-width: 220px;
  margin-top: 10px;
`

export const MobileBottom = styled.div`
  display: none;
  ${cs.media.tablet`display: block;`};
`
