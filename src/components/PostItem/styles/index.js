import styled from 'styled-components'

import { theme, cs } from '@/utils'

import { getOpacity } from './metrics'

export const Wrapper = styled.article`
  ${cs.flex()};
  position: relative;
  padding-left: 3px;
  padding-right: 0;
  border-radius: 4px;
  opacity: ${({ entry, active, accountInfo }) =>
    getOpacity(entry, active, accountInfo)};

  padding-top: ${({ divider }) => (divider ? '10px' : '6px')};
  padding-bottom: ${({ divider }) => (divider ? '10px' : '6px')};
  border-bottom: ${({ divider }) => (divider ? '1px solid' : '0')};
  border-bottom-color: ${theme('thread.articleDivider')};

  &:hover {
    background: ${({ hover }) => (hover ? theme('thread.articleHover') : '')};
  }
  transition: all 0.25s;
`
export const Main = styled.div`
  ${cs.flexColumnGrow()};
`
export const holder = 1
