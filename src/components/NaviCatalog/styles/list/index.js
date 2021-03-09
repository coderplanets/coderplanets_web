import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

const activeColor = '#009C9E'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  padding-bottom: 10px;

  /* childMenu style */
  background: ${({ isRootMenu }) => (isRootMenu ? 'transparent' : '#042833')};
  padding-top: ${({ isRootMenu }) => (isRootMenu ? '0' : '12px')};
  border: ${({ isRootMenu }) => (isRootMenu ? 'none' : '1px solid')};
  border-color: ${({ isRootMenu }) => (isRootMenu ? 'none' : '#09303e')};
  margin-top: ${({ isRootMenu }) => (isRootMenu ? '0' : '-8px')};
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
  padding-left: ${({ isRootMenu }) => (isRootMenu ? '4px' : '8px')};

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
  ${css.size(13)};
  margin-right: 8px;
`
export const Icon = styled(Img)`
  display: ${({ active }) => (active ? 'block' : 'none')};
  fill: ${({ active }) =>
    active ? activeColor : theme('thread.articleDigest')};

  ${css.size(14, false)};

  ${Item}:hover & {
    display: block;
  }
`
export const ActiveDot = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
  background: ${activeColor};
  width: 5px;
  height: 5px;
  border-radius: 50%;
`
export const TotalNumber = styled.div`
  font-size: 11px;
  color: ${({ active }) =>
    active ? activeColor : theme('thread.articleDigest')};

  opacity: ${({ active }) => (active ? 1 : 0.8)};
  font-size: ${({ active }) => (active ? '12px' : '11px')};
`
