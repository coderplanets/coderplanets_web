import styled from 'styled-components'

import HeaderStatesSVG from '../../../components/SvgIcons/HeaderStatesSVG'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
`

export const HeaderStatesIcon = styled(HeaderStatesSVG)`
  fill: ${theme('header.fg')};
  width: 22px;
  height: 26px;
  cursor: pointer;
  margin-top: 5px;
  transform: rotate(180deg);
`

export const Divider = styled.div`
  border-left: 1px solid;
  border-color: ${theme('header.fg')};
  height: 15px;
  margin-left: 10px;
  margin-right: 6px;
  opacity: 0.7;
`
