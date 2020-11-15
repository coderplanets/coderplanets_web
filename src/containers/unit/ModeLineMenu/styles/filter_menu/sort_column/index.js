import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn('align-start')};
  width: 32vw;
  max-width: 32vw;
  height: 100%;
`
export const ItemBar = styled.div`
  ${css.flexColumn('align-start')};
  width: 95%;
  margin-bottom: 10px;
  padding: 4px 8px;
  padding-right: 5px;
  border-radius: 4px;
  border: 1px solid;
  background: #0f323e;
  /* color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')}; */
  border-color: ${({ active }) => (active ? '#194d5f' : 'transparent')};
`
export const Title = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  color: ${theme('thread.articleTitle')};
  font-size: 12px;
  margin-bottom: 2px;
`
export const OpenedIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 10px;
  height: 10px;
  display: block;
  transform: rotate(90deg);
`
export const ClosedIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(12)};
  margin-top: -1px;
  display: block;
  transform: rotate(90deg);
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 10px;
`
export const ArrowIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 10px;
  height: 10px;
  display: block;
`
