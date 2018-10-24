import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
`
export const InnerBtnWrapper = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
`

export const FilterIcon = styled(Img)`
  fill: ${theme('font')};
  width: 16px;
  height: 16px;
  margin-top: 2px;
  margin-left: 3px;
`
