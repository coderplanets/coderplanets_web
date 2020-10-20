import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};

  color: ${theme('baseColor.red')};
  border: 1px dashed;
  border-color: ${theme('baseColor.red')};
  padding: 0 5px;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 0.9rem;
`
export const RefinedIcon = styled(Img)`
  fill: ${theme('baseColor.red')};
  width: 15px;
  height: 15px;
  margin-right: 5px;
  margin-top: -2px;
  display: block;
`
export const RefinedText = styled.div``
