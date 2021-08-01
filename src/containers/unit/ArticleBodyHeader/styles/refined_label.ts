import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

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
  ${css.size(15)};
  margin-right: 5px;
  margin-top: -2px;
`
export const RefinedText = styled.div``
