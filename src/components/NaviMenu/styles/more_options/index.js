import styled from 'styled-components'

import Img from '@/Img'
import { css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center', 'justify-start')};
  color: #7d8f90;
  padding: 20px 10px;
  padding-left: 25px;
  min-height: 280px;
  background: #05303e;
`

export const Block = styled.div`
  ${css.flexColumn('align-both')};
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
  ${css.size(30)};
  display: block;
  margin-bottom: 5px;
`
export const Title = styled.div``
