import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme, zIndex } from '@/utils/css'

export const Wrapper = styled.div<TActive>`
  ${css.flex('justify-start')};
  position: fixed;
  z-index: ${zIndex.header};
  top: ${({ visible }) => (visible ? '0' : '-33px')};
  width: 100%;
  /* TODO: move namespace to modeline */
  background: ${theme('header.fixed')};
  opacity: ${({ visible }) => (visible ? 1 : '0')};
  height: 35px;
  padding-left: 5vw;

  transition: top 0.3s;
  transition-delay: 1s;
`
export const InnerWrapper = styled.div`
  width: 100%;
  height: 33px;
  ${css.flex('align-center', 'justify-between')};
  padding-left: 0;
  padding-right: 0vw;
  transition: all 0.2s;
`
export const TabsWrapper = styled.div`
  flex-grow: 1;
  max-width: calc(100% - 30px);
`
export const TagWrapper = styled.div`
  position: absolute;
  max-width: 60px;
  min-width: 50px;
  right: 0;
  z-index: 1;
  height: 100%;
`
