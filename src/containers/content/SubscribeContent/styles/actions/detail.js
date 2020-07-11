import styled from 'styled-components'

import Img from '@/Img'
import DotDivider from '@/components/DotDivider'

import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
`
export const Title = styled.div`
  ${cs.flex('align-center')};
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
  width: 15px;
  height: 15px;
  display: block;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  &:active {
    fill: ${theme('thread.articleTitle')};
    width: 16px;
    height: 16px;
  }

  transition: all 0.2s;
`
