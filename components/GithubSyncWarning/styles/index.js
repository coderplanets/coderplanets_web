import styled from 'styled-components'

import Img from 'components/Img'
import { theme, cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  justify-content: center;
  padding: 30px;
`
export const Logo = styled(Img)`
  fill: ${theme('baseColor.error')};
  width: 60px;
  height: 60px;
  display: block;
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
