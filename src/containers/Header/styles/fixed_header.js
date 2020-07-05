import styled from 'styled-components'

import { cs, theme } from '@/utils'

import {
  Wrapper as WrapperBase,
  InnerWrapper as InnerWrapperBase,
} from './header'

export { RouterWrapper, HeaderSearchIcon, Operations, Search } from './header'

export const Wrapper = styled(WrapperBase)`
  position: fixed;
  z-index: ${cs.zIndex.header};
  top: ${({ fixed }) => (fixed ? '0' : '-33px')};
  width: 100%;
  background: ${theme('header.fixed')};
  opacity: ${({ fixed }) => (fixed ? '0.9' : '0')};

  transition: top 0.3s;
  transition-delay: 1s;
`

export const InnerWrapper = styled(InnerWrapperBase)`
  padding-left: 5vw;
  padding-right: 12vw;

  ${cs.media.laptopL`
    padding-left: 8vw;
    padding-right: 10vw;
  `};
`
