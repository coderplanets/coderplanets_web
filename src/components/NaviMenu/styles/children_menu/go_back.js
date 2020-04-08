import styled from 'styled-components'

import Img from '@Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center', 'justify-start')};
  margin-right: 5px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 2px;
  padding-left: 6px;
  color: #5c7679;

  &:hover {
    color: #226fa0;
    font-weight: bold;
    cursor: pointer;
    padding-left: 2px;
  }
  transition: all 0.3s;
`
export const BackIcon = styled(Img)`
  fill: #5c7679;
  width: 14px;
  height: 14px;
  display: block;
  opacity: 0.7;
  margin-right: 8px;

  ${Wrapper}:hover & {
    fill: #226fa0;
    opacity: 1;
  }
`
