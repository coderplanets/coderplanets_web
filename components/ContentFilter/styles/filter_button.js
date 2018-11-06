import styled from 'styled-components'

import Img from '../../Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex()};
`
export const InnerBtnWrapper = styled.div`
  ${cs.flex('align-center')};

  &:hover {
    cursor: pointer;
  }
`
export const FilterIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 14px;
  height: 13px;
  margin-left: 5px;
  display: block;
  transform: rotate(90deg);
  ${InnerBtnWrapper}:hover & {
    fill: ${theme('banner.title')};
  }
`
