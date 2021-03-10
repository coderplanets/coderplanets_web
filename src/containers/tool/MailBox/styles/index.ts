import styled from 'styled-components'

import HeaderMailSVG from '@/SvgIcons/HeaderMailSVG'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  position: relative;
`
export const HeaderMailIcon = styled(HeaderMailSVG)`
  fill: ${theme('header.fg')};
  ${css.size(20)};
  cursor: pointer;
  margin-right: 12px;
`
export const NotifyDot = styled.div`
  position: absolute;
  display: ${({ active }) => (active ? 'block' : 'none')};
  ${css.circle(8, false)};
  background: ${theme('baseColor.red')};
  top: 5px;
  right: 8px;
`
