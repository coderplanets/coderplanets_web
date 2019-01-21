import styled from 'styled-components'

import { theme, cs } from 'utils'
import Img from 'Img'

export const Wrapper = styled.div`
  ${cs.flex()};
`

export const Linker = styled.a`
  color: ${theme('thread.articleTitle')};
  &:hover {
    text-decoration: underline;
    color: ${theme('thread.articleTitle')};
  }
`

export const SocialIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  display: ${({ active }) => (active ? 'block' : 'none')};
  width: 18px;
  height: 18px;
  margin-right: 8px;
  opacity: 1;

  &:hover {
    fill: ${theme('banner.title')};
    cursor: pointer;
  }

  transition: fill 0.3s;
`
