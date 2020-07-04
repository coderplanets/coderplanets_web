import styled from 'styled-components'

import { Button } from '@/components/Buttons'
import { theme, cs } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${cs.flex()};
`
export const InnerBtnWrapper = styled.div`
  ${cs.flex('align-center')};

  &:hover {
    cursor: pointer;
  }
`
export const ButtonWrapper = styled(Button)`
  color: #196781;
  /* border: 1px solid #196781; */
  border: none;
`
export const FilterIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 14px;
  height: 14px;
  margin-left: 5px;
  display: block;
  ${InnerBtnWrapper}:hover & {
    fill: ${theme('banner.title')};
  }
`
