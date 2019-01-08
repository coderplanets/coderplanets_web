import styled from 'styled-components'

// import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-center')};
  margin-top: -15px;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: ${theme('thread.articleDigest')};
`

export const Link = styled.a`
  transition: color 0.3s;
  color: ${theme('markdown.link')};

  &:hover {
    cursor: pointer;
    color: ${theme('markdown.link')};
    text-decoration: underline;
  }
`
