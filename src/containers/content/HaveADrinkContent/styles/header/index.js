import styled from 'styled-components'

import Img from '@/Img'
import { css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('justify-between')}
  width: 100%;
`
export const GoBackWrapper = styled.div`
  ${css.flex('align-center')};
`
export const BackIcon = styled(Img)`
  fill: #708b96;
  ${css.size(16)};
  display: block;
  margin-right: 10px;

  ${GoBackWrapper}:hover & {
    fill: #327faf;
    cursor: pointer;
    margin-right: 6px;
  }
  transition: all 0.25s;
`
export const BackText = styled.div`
  color: #708b96;
  font-size: 16px;

  ${GoBackWrapper}:hover & {
    color: #327faf;
    cursor: pointer;
  }
`
