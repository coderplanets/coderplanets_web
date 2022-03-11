import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div<{ showShadow: boolean }>`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  background: ${theme('modal.bg')};
  /* padding: 20px 38px; */
  padding: ${({ showShadow }) => (showShadow ? '12px 38px' : '20px 38px')};
  filter: ${({ showShadow }) =>
    showShadow ? theme('modal.subPanelShadow') : ''};
  z-index: 1;

  ${css.media.mobile`
    background: transparent;
    padding: 12px 2px;
  `};
`
export const ReportIcon = styled(Img)`
  ${css.size(16)};
  fill: ${theme('baseColor.red')};
`
export const Text = styled.div`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
  margin-left: 8px;
  margin-right: 6px;
`
export const ContentTitle = styled.div`
  color: ${theme('thread.articleDigest')};
  ${css.cutRest('300px')};
  font-size: 15px;
  margin-left: 3px;
  margin-right: 3px;
  &:before {
    content: '(';
  }
  &:after {
    content: ')';
  }
`
