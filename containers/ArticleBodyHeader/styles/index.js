import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-between')};
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
export const RefinedLabel = styled.div`
  ${cs.flex('align-center')};

  color: ${theme('baseColor.error')};
  border: 1px dashed;
  border-color: ${theme('baseColor.error')};
  padding: 0 5px;
  margin-right: 10px;
  border-radius: 5px;
`
export const RefinedIcon = styled(Img)`
  fill: ${theme('baseColor.error')};
  width: 15px;
  height: 15px;
  margin-right: 5px;
  margin-top: -2px;
  display: block;
`
export const RefinedText = styled.div``
