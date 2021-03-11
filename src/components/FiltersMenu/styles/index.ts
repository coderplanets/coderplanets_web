import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  width: 100%;
  min-width: 110px;
`
export const ItemWrapper = styled.div`
  ${css.flexColumn()};
  border-bottom: ${({ withDivider }) => (withDivider ? '1px solid' : 'none')};
  border-bottom-color: ${({ withDivider }) =>
    withDivider ? '#094354' : 'none'};

  :last-child {
    border-bottom: none;
  }
`
export const Item = styled.div`
  ${css.flex()};
  justify-content: ${({ revert }) => (revert ? 'flex-start' : 'flex-end')};
  fill: ${theme('thread.articleDigest')};
  align-items: center;
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: ${({ active }) => (active ? '15px' : '14px')};
  padding: 8px 6px;
  padding-bottom: ${({ noFilter }) => (noFilter ? '10px' : '5px')};

  background: ${({ active, itemBgHighlight }) =>
    active && itemBgHighlight ? '#0B323E' : 'transparent'};
  border-radius: 6px;
  margin-top: ${({ topMargin }) => (topMargin ? '10px' : '0')};

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
  transition: margin-top 0.25s;
`
export const Icon = styled(Img)`
  opacity: ${({ active }) => (active ? 1 : 0)};
  ${css.size(15)};

  ${Item}:hover & {
    opacity: 1;
  }
  transition: opacity 0.25s;
`

export const ActiveDot = styled.div`
  background: ${theme('thread.articleTitle')};
  width: 5px;
  height: 5px;
  border-radius: 50%;
`
