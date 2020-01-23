import styled from 'styled-components'

import Img from '@components/Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  justify-content: flex-end;
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
  fill: #226fa0;
  width: 16px;
  height: 16px;
  display: block;
  opacity: 0.7;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`
