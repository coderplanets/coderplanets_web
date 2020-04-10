import styled from 'styled-components'

import Img from '@Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center', 'justify-start')};
  height: 30px;
  border-radius: 5px;
  padding: 0 2px;
  padding-left: 2px;
  color: #5c7679;
  font-size: 13px;

  &:hover {
    color: #226fa0;
    font-weight: bold;
    cursor: pointer;
    padding-left: 0px;
  }
  transition: all 0.25s;
`
export const BackIcon = styled(Img)`
  fill: #5c7679;
  width: 14px;
  height: 14px;
  display: block;
  opacity: 0.7;
  margin-right: 6px;

  ${Wrapper}:hover & {
    fill: #226fa0;
    opacity: 1;
    margin-right: 4px;
  }

  transition: all 0.25s;
`
