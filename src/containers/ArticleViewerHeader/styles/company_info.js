import styled from 'styled-components'

import Img from '@/Img'
import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexGrow('align-center')};
  margin-left: 4px;
`
export const Title = styled.div`
  font-size: 1rem;
  color: ${theme('thread.articleTitle')};
  margin-top: 2px;
`
export const HomtPage = styled.div`
  ${cs.flex('align-center')};
`
export const HomeIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 15px;
  height: 15px;
  display: block;
`
export const HomepageLink = styled.a`
  color: ${theme('thread.articleDigest')};
  margin-left: 3px;
  &:hover {
    text-decoration: underline;
    color: ${theme('thread.articleTitle')};
  }
`
export const Username = styled.div`
  font-size: 0.9rem;
`
export const PublishAt = styled.div`
  ${cs.flex('align-center')};
  font-size: 0.8rem;
  color: ${theme('thread.articleDigest')};
`
export const Logo = styled(Img)`
  border-radius: 3px;
  width: 64px;
  height: 64px;
  margin-right: 12px;
`
