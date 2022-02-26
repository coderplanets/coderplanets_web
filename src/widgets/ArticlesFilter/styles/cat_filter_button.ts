import styled from 'styled-components'

import Button from '@/widgets/Buttons/Button'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

import ArrowSVG from '@/icons/ArrowSolid'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.extraInfo')};
  margin-right: -8px;
`
export const InnerBtnWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 2px;
  color: ${theme('thread.articleTitle')};
  font-weight: 550;

  &:hover {
    cursor: pointer;
  }
`
export const ButtonWrapper = styled(Button)`
  border: none;
`
export const FilterIcon = styled(ArrowSVG)`
  fill: ${theme('thread.extraInfo')};
  ${css.size(12)};
  transform: rotate(90deg);
  margin-left: 5px;
  ${InnerBtnWrapper}:hover & {
    fill: ${theme('thread.articleDigest')};
  }
`
