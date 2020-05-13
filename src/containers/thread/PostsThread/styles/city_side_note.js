import styled from 'styled-components'

// import Img from '@/Img'
import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
`
export const Title = styled.div`
  font-size: 0.9rem;
  color: ${theme('thread.articleTitle')};
`
export const Divider = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme('thread.articleTitle')};
  margin-top: 6px;
  margin-bottom: 10px;
  opacity: 0.4;
`
export const Desc = styled.div`
  font-size: 0.8rem;
  color: ${theme('thread.articleDigest')};
`

export const Linker = styled.a`
  color: ${theme('thread.articleDigest')};
  text-decoration: underline;
  margin-left: 3px;
  &:hover {
    text-decoration: underline;
    color: ${theme('banner.title')};
  }
`
