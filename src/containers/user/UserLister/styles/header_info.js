import styled from 'styled-components'

import Img from '@components/Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  margin-bottom: 8px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
  margin-bottom: 3px;
`
export const DescLabel = styled.div`
  ${cs.flex('align-center')};
`
export const DescIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 12px;
  height: 12px;
  margin-right: 5px;
  display: block;
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
  width: 15px;
  height: 15px;
  fill: ${theme('thread.articleTitle')};
`

export const DescText = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.9rem;
`
