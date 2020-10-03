import styled from 'styled-components'

// import { cs } from '@/utils'
import {
  Nav as NavBase,
  RealBar as RealBarBase,
  SlipBar as SlipBarBase,
} from './index'

export const Wrapper = styled.nav.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  position: relative;
  width: auto;
  overflow-x: scroll;
  overflow-y: hidden;
  font-size: 13px;
`
export const Nav = styled(NavBase)`
  flex-flow: nowrap;
`
export const SlipBar = styled(SlipBarBase)``
export const RealBar = styled(RealBarBase)`
  height: 4px;
  border-radius: 5px;
`
