import styled from 'styled-components'

import Button from '@/widgets/Buttons/Button'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

import ArrowSVG from '@/icons/ArrowSolid'

export const Wrapper = styled.div`
  ${css.flex()};
`
export const InnerBtnWrapper = styled.div`
  ${css.flex('align-center')};

  &:hover {
    cursor: pointer;
  }
`
export const ButtonWrapper = styled(Button)`
  color: #196781;
  border: none;
`
export const FilterIcon = styled(ArrowSVG)`
  fill: #196781;
  ${css.size(12)};
  transform: rotate(90deg);
  margin-left: 5px;
  ${InnerBtnWrapper}:hover & {
    fill: ${theme('banner.title')};
  }
`
