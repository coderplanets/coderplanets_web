import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const Item = styled.div`
  ${css.flex('align-center')};
  cursor: pointer;
`
export const ReferNum = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: #00a59b;
  margin-right: 5px;
`
export const Text = styled.div<TActive>`
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.extraInfo')};
  font-size: 13px;

  ${Item}:hover & {
    color: ${theme('thread.articleTitle')};
  }

  transition: color 0.25s;
`
export const PanelWrapper = styled.div`
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
