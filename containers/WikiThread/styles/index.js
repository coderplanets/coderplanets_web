import styled from 'styled-components'

import { Button } from 'antd'

// import Img from '../../../components/Img'
// import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
`
export const LeftPadding = styled.div`
  width: 2.5vw;
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
  width: 25vw;
  margin-left: 30px;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PublishBtn = styled(Button)`
  width: 100%;
  max-width: 220px;
  margin-top: 10px;
`
