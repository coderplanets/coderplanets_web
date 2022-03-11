import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div<{ visible: boolean }>`
  ${css.flex('align-center', 'justify-between')};
  position: fixed;
  top: ${({ visible }) => (visible ? 0 : '-60px;')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  width: calc(100% - 200px);
  margin-left: -50px;
  height: 60px;
  background: #fff; // to-theme
  border-bottom: 1px solid;
  border-bottom-color: ${theme('drawer.divider')};
  z-index: 5;
  transition: all 0.2s;
`
export const ArticleWrapper = styled.div`
  ${css.flex('align-center')};
`
export const ArticleTitle = styled.div`
  font-size: 18px;
  color: ${theme('thread.articleTitle')};
  ${css.cutRest('400px')};
`
