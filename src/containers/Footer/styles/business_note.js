import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  margin-top: 10%;
  ${cs.media.mobile`margin-top: 20%;`};
`
export const MailIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 100px;
  height: 100px;
  display: block;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: 10px;
`
export const MailLink = styled.a`
  color: ${theme('thread.articleTitle')};
  margin-top: 4px;

  font-size: 0.8rem;
  text-decoration: underline;

  &:hover {
    color: ${theme('banner.title')};
    text-decoration: underline;
    cursor: pointer;
  }
  transition: color 0.2s;
`
