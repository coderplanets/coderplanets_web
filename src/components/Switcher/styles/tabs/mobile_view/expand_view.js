import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

import { Nav as NavBase } from '../index'

export const Wrapper = styled.nav.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  position: relative;
  width: 100%;
  font-size: 13px;
  margin-top: 20px;
  min-height: 75px;
  transition: all 0.25s;
`
export const Nav = styled(NavBase)`
  overflow-x: scroll;
  overflow-y: hidden;
  flex-flow: wrap;
  width: calc(100% - 35px);
  margin: 0;
`
export const MoreWrapper = styled.div`
  ${css.flex('align-start', 'justify-end')};
  position: absolute;
  top: 1px;
  right: 0;
  width: 35px;
  height: 30px;
`
export const ArrowIcon = styled(Img)`
  fill: ${theme('tabs.header')};
  display: block;
  ${css.size(24)};
  transform: rotate(90deg);
`
