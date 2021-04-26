import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  margin-bottom: 20px;
`
export const ReportIcon = styled(Img)`
  ${css.size(16)};
  fill: ${theme('baseColor.red')};
`
export const Text = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-left: 8px;
  margin-right: 6px;
`
export const ContentTitle = styled.div`
  color: ${theme('thread.articleDigest')};
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
