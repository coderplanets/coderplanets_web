import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('align-center')};
`
export const Item = styled.div`
  ${css.flex('align-center')};
  cursor: pointer;
`
const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 16px;
  height: 16px;
  margin-top: -1px;
  display: block;
`
export const ReferIcon = styled(Icon)``
export const RecordIcon = styled(Icon)`
  width: 18px;
  height: 18px;
`

export const ReferNum = styled.span`
  color: #00a59b;
  margin-right: 3px;
`
export const Text = styled.div`
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: 12px;
  margin-left: 7px;

  ${Item}:hover & {
    color: ${theme('thread.articleTitle')};
  }

  transition: color 0.25s;
`
export const PanelWrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn()};
  position: relative;
  border-top: 1px solid;
  border-top-color: #00424f;
`
export const PanelInnerWrapper = styled.div`
  height: 100%;
  border-left: 1px solid;
  border-left-color: #00424f;
  padding: 25px 0;
  padding-right: 25px;
  margin-left: 18px;
  min-height: 120px;
`
export const IndexArrowIcon = styled(Img)`
  fill: #00424e;
  position: absolute;
  top: -18px;
  right: 20px;
  transform: rotate(-90deg);

  width: 24px;
  height: 24px;
  display: block;
`
