import styled from 'styled-components'

import HeaderStatesSVG from '@/SvgIcons/HeaderStatesSVG'
import { theme, cs } from '@/utils'

import { Wrapper as HeaderWrapper } from './header'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  ${cs.media.tablet`display: none`};
`

export const HeaderStatesIcon = styled(HeaderStatesSVG).attrs((props) => ({
  'data-test-id': props.testId,
}))`
  opacity: 0;
  fill: ${theme('header.fg')};
  width: 22px;
  height: 26px;
  cursor: pointer;
  margin-top: 5px;
  transform: rotate(-360deg);

  ${HeaderWrapper}:hover & {
    opacity: 1;
  }
  transition: opacity 0.3s;
`

export const ThemeDot = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${theme('cover')};
  border: 1px solid;
  border-color: ${theme('header.spliter')};
  margin-left: 10px;
  border-radius: 100%;
  cursor: pointer;
`

export const Divider = styled.div`
  border-left: 1px solid;
  border-color: ${theme('header.fg')};
  height: 15px;
  margin-left: 10px;
  margin-right: 6px;
  opacity: 0.7;
`
