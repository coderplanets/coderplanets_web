import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'
import css, { theme } from '@/utils/css'
import HeaderMailSVG from '@/SvgIcons/HeaderMailSVG'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  position: relative;
`
export const HeaderMailIcon = styled(HeaderMailSVG)`
  fill: ${theme('header.fg')};
  ${css.size(20)};
  cursor: pointer;
  margin-right: 12px;
`
export const NotifyDot = styled.div<TActive>`
  position: absolute;
  display: ${({ active }) => (active ? 'block' : 'none')};
  ${css.circle(8, false)};
  background: ${theme('baseColor.red')};
  top: 5px;
  right: 8px;
`
