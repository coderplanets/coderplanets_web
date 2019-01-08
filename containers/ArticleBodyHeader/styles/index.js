import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-between')};
  align-items: center;
  width: 100%;
`
export const LinkSource = styled.div`
  &:hover {
    color: ${theme('article.linkHover')};
    cursor: pointer;
  }
`
export const MoreWrapper = styled.div`
  ${cs.flex()};
  cursor: pointer;
`
export const MoreIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 15px;
  height: 15px;
  &:hover {
    fill: ${theme('thread.articleTitle')};
  }
`
export const LinkFrom = styled.a`
  ${cs.flex()};

  color: ${theme('article.link')};
  margin-left: 5%;
  &:hover {
    cursor: pointer;
    color: ${theme('thread.extraInfo')};
    text-decoration: underline;
  }
`
