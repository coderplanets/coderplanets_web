import styled from 'styled-components'

import Img from '@components/Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  justify-content: flex-start;
  color: #7d8f90;
  padding: 20px 10px;
  padding-left: 25px;
  min-height: 280px;
  background: #05303e;
`

export const Block = styled.div`
  ${cs.flexColumn('align-both')};
  width: 80px;
  height: 80px;
  margin-bottom: 10px;

  &:hover {
    background: #043947;
    cursor: pointer;
  }
`
export const Icon = styled(Img)`
  fill: #7d8f90;
  width: 30px;
  height: 30px;
  display: block;
  margin-bottom: 5px;
`
export const Title = styled.div``
