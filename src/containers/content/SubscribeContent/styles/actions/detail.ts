import styled from 'styled-components'

import Img from '@/Img'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  margin-top: 100px;
`
export const Title = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 12px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
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
