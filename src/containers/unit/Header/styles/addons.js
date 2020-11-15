import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const SettingIcon = styled(Img)`
  fill: ${theme('header.fg')};
  ${css.size(16)};
  margin-top: -2px;
  display: block;

  &:hover {
    cursor: pointer;
  }
`
export const Divider = styled.div`
  border-left: 1px solid;
  border-color: ${theme('header.fg')};
  height: 15px;
  margin-left: 10px;
  margin-right: 6px;
  opacity: 0.7;
`
