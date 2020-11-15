import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex()};
  padding: 0 2px;
`
export const Linker = styled.a`
  color: ${theme('thread.articleTitle')};
  &:hover {
    text-decoration: underline;
    color: ${theme('thread.articleTitle')};
  }
`
export const SocialIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  display: ${({ active }) => (active ? 'block' : 'none')};
  width: 14px;
  height: 14px;
  margin-right: 8px;
  opacity: 1;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: fill 0.3s;
`
