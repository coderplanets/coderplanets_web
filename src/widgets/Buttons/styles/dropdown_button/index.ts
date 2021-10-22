import styled from 'styled-components'

import Img from '@/Img'
import { Wrapper as NormalButton } from '../button'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;
  position: relative;
`
export const ButtonWrapper = styled(NormalButton)`
  width: 100%;
  height: 30px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-right: 6px;
`
export const DropdownButtonWrapper = styled(NormalButton)`
  width: 36px;
  height: 30px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`
export const Divider = styled.div`
  position: absolute;
  right: 35px;
  width: 1px;
  height: 24px;
  background: #2c6b94;

  ${Wrapper}:hover & {
    display: none;
  }
`
export const MoreIcon = styled(Img)`
  fill: ${theme('button.fg')};
  ${css.size(10)};
  transform: rotate(180deg);
`
