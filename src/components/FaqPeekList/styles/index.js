import styled from 'styled-components'

import Img from '@Img'
// import { theme } from '@utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  position: relative;
  min-height: 180px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: #126682;
  margin-top: 16px;
  margin-bottom: 18px;
  background: #002b35;
  padding: 15px;
`
export const ArrowIcon = styled(Img)`
  fill: #126682;
  position: absolute;
  top: -20px;
  right: 44px;
  height: 20px;
  width: 20px;
`
