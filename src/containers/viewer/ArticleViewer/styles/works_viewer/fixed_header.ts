import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div<{ visible: boolean }>`
  ${css.flex('align-center', 'justify-between')};
  position: fixed;
  top: ${({ visible }) => (visible ? 0 : '-60px;')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  width: calc(100% - 220px);
  height: 60px;
  background: #072a36;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('drawer.divider')};
  z-index: 5;
  transition: all 0.2s;
`
export const ArticleWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Cover = styled(Img)`
  ${css.size(20)};
  border-radius: 4px;
  margin-right: 10px;
`
export const Title = styled.div`
  font-size: 18px;
  color: ${theme('thread.articleTitle')};
  ${css.cutRest('120px')};
`
export const Desc = styled.div`
  font-size: 14px;
  margin-top: 3px;
  color: ${theme('thread.articleDigest')};
  ${css.cutRest('240px')};
`
