import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('justify-start')};
  position: fixed;
  z-index: ${css.zIndex.header};
  top: ${({ visiable }) => (visiable ? '0' : '-33px')};
  width: 100%;
  /* TODO: move namespace to modeline */
  background: ${theme('header.fixed')};
  opacity: ${({ visiable }) => (visiable ? 1 : '0')};
  height: 32px;
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
export const BaseInfo = styled.div`
  ${css.flex('align-center')};
  height: 100%;
`
export const Avatar = styled(Img)`
  ${css.circle(16)};
  margin-top: -1px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  margin-left: 12px;
  ${css.cutFrom('60vw')};
`
