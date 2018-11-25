import styled from 'styled-components'

import HeaderMailSVG from '../../../components/SvgIcons/HeaderMailSVG'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  padding-top: 8px;
  position: relative;
`
export const HeaderMailIcon = styled(HeaderMailSVG)`
  fill: ${theme('header.fg')};
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 12px;
  margin-top: -2px;
`
export const NofityDot = styled.div`
  position: absolute;
  display: ${({ active }) => (active ? 'block' : 'none')};
  width: 8px;
  height: 8px;
  background: tomato;
  border-radius: 100%;
  top: 5px;
  right: 8px;
`
