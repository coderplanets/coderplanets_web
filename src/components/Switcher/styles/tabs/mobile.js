import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

import {
  Nav as NavBase,
  RealBar as RealBarBase,
  SlipBar as SlipBarBase,
} from './index'

export const Wrapper = styled.nav.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  position: relative;
  width: 100%;
  font-size: 13px;
  /* ::-webkit-scrollbar {
    display: none;
  } */
`
export const Nav = styled(NavBase)`
  overflow-x: scroll;
  overflow-y: hidden;
  flex-flow: nowrap;
  width: calc(100% - 35px);
  margin: 0;
`
export const MoreWrapper = styled.div`
  ${cs.flex('align-center', 'justify-end')};
  position: absolute;
  top: 5px;
  right: 0;
  width: 35px;
  height: 30px;
  border-left: 1px solid;
  border-left-color: ${theme('tabs.header')};
  border-radius: 1px;
  box-shadow: -2px 0px 0px 0px rgb(12, 51, 64);
`
export const ArrowIcon = styled(Img)`
  fill: ${theme('tabs.header')};
  display: block;
  width: 24px;
  height: 24px;
  transform: rotate(270deg);
`
export const SlipBar = styled(SlipBarBase)``
export const RealBar = styled(RealBarBase)`
  border-radius: 5px;
`
