import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

import { WIDTH } from './metric'

const activeColor = '#009C9E'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  width: ${WIDTH};
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

  padding: ${({ withDivider }) => (withDivider ? '8px 6px' : '6px')};

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
