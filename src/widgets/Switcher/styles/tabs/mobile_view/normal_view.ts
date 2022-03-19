import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

import {
  Nav as NavBase,
  RealBar as RealBarBase,
  SlipBar as SlipBarBase,
} from '../index'

export const Wrapper = styled.nav.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
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
  width: calc(100% - 28px);
  margin: 0;
`
export const MoreWrapper = styled.div`
  ${css.flex('align-center', 'justify-end')};
  position: absolute;
  top: 10px;
  right: -4px;
  width: 30px;
  height: 20px;
  border-left: 1px solid;
  border-left-color: ${theme('tabs.header')};
  border-radius: 1px;
  box-shadow: -2px 0px 0px 0px rgb(28 53 62);
`
export const ArrowIcon = styled(Img)`
  fill: ${theme('tabs.header')};
  ${css.size(24)};
  transform: rotate(270deg);
`
export const SlipBar = styled(SlipBarBase)``
export const RealBar = styled(RealBarBase)`
  border-radius: 5px;
`
