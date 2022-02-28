import styled from 'styled-components'

import Button from '@/widgets/Buttons/Button'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

import ArrowSVG from '@/icons/ArrowSimple'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.extraInfo')};
`
export const InnerBtnWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 2px;
  color: ${theme('thread.extraInfo')};
  font-weight: 550;

  &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
  }
  transition: color 0.2s;
`
export const ButtonWrapper = styled(Button)`
  border: none;
`
export const FilterIcon = styled(ArrowSVG)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
  transform: rotate(-90deg);
  margin-left: 5px;
  ${InnerBtnWrapper}:hover & {
    fill: ${theme('thread.articleDigest')};
  }
`
