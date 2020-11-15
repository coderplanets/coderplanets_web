import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const ListItemWrapper = styled.div`
  width: 100%;
  color: ${theme('thread.articleDigest')};
  border-bottom: 1px solid;
  border-bottom-color: #034256;
  padding: 10px;
  :last-child {
    border-bottom: none;
  }
`
export const Header = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 4px;
  color: ${theme('thread.articleDigest')};
`
export const Icon = styled(Img)`
  display: block;
  ${css.circle(13)};
  margin-right: 6px;
`
export const InfoIcon = styled(Img)`
  ${css.circle(13)};
  display: block;
  fill: ${theme('thread.articleDigest')};
  margin-left: 5px;
  opacity: 0;

  ${Header}:hover & {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
    opacity: 1;
  }
  transition: all 0.2s;
`
export const Timestamp = styled.div`
  ${css.flex()};
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
