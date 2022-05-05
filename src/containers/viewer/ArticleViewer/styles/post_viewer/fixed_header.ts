import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div<{ visible: boolean }>`
  ${css.flex('align-center', 'justify-between')};
  position: fixed;
  top: ${({ visible }) => (visible ? 0 : '-60px;')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  width: calc(100% - 170px);
  margin-left: -60px;
  padding-left: 68px;
  height: 60px;
  background: #fff; // to-theme
  border-bottom: 1px solid;
  border-bottom-color: ${theme('drawer.divider')};
  z-index: 5;
  transition: all 0.2s;
`
export const LeftPart = styled.div`
  ${css.flex('align-center')};
`
export const ArticleTitle = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  ${css.cutRest('400px')};
`
export const ArticleStateBadgeWrapper = styled.div`
  margin-left: 10px;
`
