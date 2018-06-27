import styled from 'styled-components'

import { Img } from '../../../components'
import { theme } from '../../../utils'

export const BodyWrapper = styled.div`
  padding: 20px;
  background: ${theme('preview.articleBg')};
  min-height: 600px;
  margin-top: 5px;
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 3px;
  flex-direction: column;
  display: flex;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
`
export const CommentsWrapper = styled.div`
  min-height: 600px;
  margin-top: 20px;
  margin-left: 4%;
  margin-right: 4%;
  margin-bottom: 10%;
  border-radius: 5px;
`

export const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: #cdd0d4;
`
export const MoreWrapper = styled.div`
  display: flex;
  cursor: pointer;
`
export const MoreIcon = styled(Img)`
  fill: #6a868a;
  width: 15px;
  height: 15px;
`
export const MoreOption = styled.div`
  visibility: hidden;
  ${MoreWrapper}:hover & {
    visibility: visible;
    cursor: pointer;
  }
`
export const LinkFrom = styled.div`
  display: flex;
  color: ${theme('article.link')};
`
export const RefinedLabel = styled.div`
  color: tomato;
  border: 1px solid tomato;
  padding: 0 5px;
  margin-right: 10px;
  border-radius: 3px;
`

export const LinkSource = styled.div`
  &:hover {
    color: ${theme('article.linkHover')};
    cursor: pointer;
  }
`
export const ArticleTitle = styled.div`
  color: ${theme('preview.title')};
  font-size: 1.5em;
  align-self: center;
  padding-top: 10px;
  padding-bottom: 5px;
  // width: 93%;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('preview.divider')};
`
export const ArticleBody = styled.article`
  padding: 20px;
  font-size: 1.2em;
  line-height: 2em;
`
