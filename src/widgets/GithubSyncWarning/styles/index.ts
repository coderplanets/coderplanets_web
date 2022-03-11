import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')};
  padding: 30px;
`
export const Logo = styled(Img)`
  fill: ${theme('baseColor.red')};
  ${css.size(60)};
  margin-bottom: 15px;
`
export const Header = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1.2rem;
  margin-bottom: 12px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 1rem;
`

export const FootLinker = styled.a`
  margin-top: 50px;
  color: ${theme('thread.articleTitle')};
  text-decoration: underline;
  &:hover {
    text-decoration: underline;
    color: ${theme('thread.articleTitle')};
  }
`
