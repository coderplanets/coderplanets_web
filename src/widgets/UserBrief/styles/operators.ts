import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import EditPenSVG from '@/icons/EditPen'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 3px;
  margin-right: 5px;
`
export const EditIcon = styled(EditPenSVG)`
  fill: ${theme('banner.desc')};
  ${css.size(16)};
  cursor: pointer;

  &:hover {
    fill: ${theme('banner.title')};
  }
  transition: opacity 0.2s;
`
