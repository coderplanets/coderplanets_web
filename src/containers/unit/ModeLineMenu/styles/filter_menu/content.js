import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('justify-between')};
  width: 100%;
  padding: 0;
`
export const RightPartWrapper = styled.div`
  ${css.flex()};
  width: 65%;
`
export const SortWrapper = styled.div`
  width: 100px;
  height: 100%;
  min-height: 200px;
`
export const ThreadWrapper = styled.div`
  width: 100px;
  height: 100%;
  min-height: 200px;
  border-left: 1px solid;
  border-left-color: #183d54;
`
export const TagWrapper = styled.div`
  width: 100px;
  /* flex-grow: 1; */
  height: 100%;
  /* min-height: 200px; */
  border-left: 1px solid;
  border-right: 1px solid;
  border-left-color: #183d54;
  border-right-color: #183d54;
`
export const ItemBar = styled.div`
  ${css.flex('align-center', 'justify-between')};
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  padding: 5px 8px;
  font-size: 13px;
  background: ${({ active }) => (active ? '#123946' : 'transparent')};
  border-radius: 3px;
`
export const ArrowIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 10px;
  height: 10px;
  display: block;
`
export const TagDot = styled.div`
  ${css.circle('6px')};
  background: ${theme('baseColor.red')};
  margin-top: -1px;
`
