import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-center')};
  color: ${theme('thread.articleTitle')};
  position: relative;
  height: 100%;
  z-index: 1;
  margin-right: 32px;
  padding: 12px 10px;
  text-align: center;
  /* flex: 1; */
  cursor: pointer;
`
export const Nav = styled.nav`
  position: relative;
  ${cs.flex('align-center')};
  flex-flow: row wrap;
  margin: 0 auto;
  padding: 0;
`
export const Label = styled.span`
  ${cs.flex('align-center')};
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 14px;
  height: 14px;
  display: block;
`
