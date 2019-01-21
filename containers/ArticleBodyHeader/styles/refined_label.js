import styled from 'styled-components'

import Img from 'components/Img'
import { theme, cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};

  color: ${theme('baseColor.error')};
  border: 1px dashed;
  border-color: ${theme('baseColor.error')};
  padding: 0 5px;
  margin-right: 10px;
  border-radius: 5px;
`
export const RefinedIcon = styled(Img)`
  fill: ${theme('baseColor.error')};
  width: 15px;
  height: 15px;
  margin-right: 5px;
  margin-top: -2px;
  display: block;
`
export const RefinedText = styled.div``
