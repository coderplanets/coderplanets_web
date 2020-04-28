import styled from 'styled-components'

import { cs, theme } from '@utils'

import { getMarginRight, getPadding } from '../metric/tabs'

export const Wrapper = styled.div`
  ${cs.flex('justify-center')};
  color: ${theme('thread.articleTitle')};
  position: relative;
  height: 100%;
  z-index: 1;
  margin-right: ${({ size }) => getMarginRight(size)};
  padding: ${({ size }) => getPadding(size)};
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

  color: ${({ active }) =>
    active ? theme('tabs.headerActive') : theme('tabs.header')};

  &:hover {
    color: ${theme('tabs.headerActive')};
    svg {
      fill: ${theme('tabs.headerActive')};
    }
  }
`
