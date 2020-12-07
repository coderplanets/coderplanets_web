import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

const activeColor = '#009C9E'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  padding-bottom: 10px;

  /* childMenu style */
  background: ${({ simple }) => (simple ? 'transparent' : '#042833')};
  padding-top: ${({ simple }) => (simple ? '0' : '12px')};
  border: ${({ simple }) => (simple ? 'none' : '1px solid')};
  border-color: ${({ simple }) => (simple ? 'none' : '#09303e')};
  margin-top: ${({ simple }) => (simple ? '0' : '-8px')};
`
export const Item = styled.div`
  ${css.flex('justify-end')};
  fill: ${theme('thread.articleDigest')};
  align-items: center;
  color: ${({ active }) =>
    active ? activeColor : theme('thread.articleDigest')};
  font-size: 14px;
  border-bottom: ${({ withDivider }) => (withDivider ? '1px solid' : 'none')};
  border-bottom-color: ${({ withDivider }) =>
    withDivider ? '#094354' : 'none'};

  padding: ${({ withDivider }) => (withDivider ? '8px 6px' : '6px 8px')};

  &:hover {
    color: ${({ active }) =>
      active ? activeColor : theme('thread.articleTitle')};
    cursor: pointer;
  }

  :last-child {
    border-bottom: none;
  }
`
export const MoreItem = styled(Item)`
  font-size: 13px;
  justify-content: center;
  padding-right: 10px;
  margin-top: 8px;
`
export const FixedIcon = styled(Img)`
  ${css.size(14)};
  margin-right: 5px;
`
export const Icon = styled(Img)`
  display: ${({ active }) => (active ? 'block' : 'none')};
  fill: ${({ active }) =>
    active ? activeColor : theme('thread.articleDigest')};
  ${css.size(15, false)};

  ${Item}:hover & {
    display: block;
  }
`
export const ActiveDot = styled.div`
  background: ${theme('thread.articleTitle')};
  width: 5px;
  height: 5px;
  border-radius: 50%;
`
