import styled from 'styled-components'

import HeaderMailSVG from '@/SvgIcons/HeaderMailSVG'
import { theme } from '@/utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  position: relative;
`
export const HeaderMailIcon = styled(HeaderMailSVG)`
  fill: ${theme('header.fg')};
  width: 20px;
  height: 20px;
  display: block;
  cursor: pointer;
  margin-right: 12px;
`
export const NotifyDot = styled.div`
  position: absolute;
  display: ${({ active }) => (active ? 'block' : 'none')};
  width: 8px;
  height: 8px;
  background: ${theme('baseColor.error')};
  border-radius: 100%;
  top: 5px;
  right: 8px;
`
