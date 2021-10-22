import styled from 'styled-components'

import Img from '@/Img'
import DotDivider from '@/widgets/DotDivider'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Title = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
  padding-left: 8px;
`
export const Dot = styled(DotDivider)`
  background: ${theme('thread.articleTitle')};
  margin-right: 8px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  padding-left: 25px;
  word-break: break-all;
`
export const CopyIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(15)};

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  &:active {
    fill: ${theme('thread.articleTitle')};
    ${css.size(16)};
  }

  transition: all 0.2s;
`
