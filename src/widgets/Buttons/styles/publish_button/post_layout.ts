import styled from 'styled-components'

// import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import EditPenSVG from '@/icons/EditPen'

import Button from '../../Button'

export const Wrapper = styled(Button)`
  ${css.flex('justify-between')};
  width: 100%;
`
export const Title = styled.div`
  letter-spacing: 2px;
  font-size: 15px;
  padding-left: 2px;
`
export const EditIcon = styled(EditPenSVG)`
  ${css.size(16)};
  fill: ${theme('button.fg')};
`
