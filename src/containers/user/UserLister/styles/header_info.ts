import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  margin-bottom: 8px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
  margin-bottom: 3px;
`
export const DescLabel = styled.div`
  ${css.flex('align-center')};
`
export const DescIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(12)};
  margin-right: 5px;
`
export const DescLink = styled.a`
  color: ${theme('thread.articleTitle')};
  text-decoration: underline;

  &:hover {
    color: ${theme('banner.title')};
    cursor: pointer;
    text-decoration: underline;
  }
  transition: color 0.3s;
`
export const EditorIcon = styled(DescIcon)`
  ${css.size(15)};
  fill: ${theme('thread.articleTitle')};
`

export const DescText = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.9rem;
`
