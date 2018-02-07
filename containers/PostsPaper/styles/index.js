import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { theme } from '../../../utils'
import { Button } from '../../../components'

export const Wrapper = styled.div`
  display: flex;
  max-width: 1400px;
`

export const LeftPadding = styled.div`
  width: 4vw;
`
export const RightPadding = styled.div`
  width: 4vw;
`
export const LeftPart = styled.div`
  flex-grow: 1;
  width: 100%;
`

export const RightPart = styled.div`
  width: 20vw;
  margin-left: 30px;
`

/* fill: ${theme('shell.search_icon')}; */
export const WritePostBtn = styled(Button)`
  margin-top: 20px;
  width: 100%;
  max-width: 180px;
  margin-left: 8%;
`
export const FilterWrapper = styled.div`
  margin-bottom: 8px;
  margin-left: 8px;
  display: flex;
`
export const FilterResultHint = styled.div`
  margin-top: 4px;
  margin-right: 10px;
  color: ${theme('paper.filter_result_hint')};
`

/* border-bottom: 1px solid #ececec; */
export const TagDivider = styled.div`
  width: 80%;
  margin-top: 50px;
  margin-bottom: 30px;
  margin-left: 8%;
`

export const PostWrapper = styled.div`
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background: ${theme('paper.article_hover')};
  }
`
export const PostMain = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`
export const PostTopHalf = styled.div`
  display: flex;
`
export const PostSecondHalf = styled.ul`
  margin-left: 11px;
  margin-top: -10px;
`
export const PostAvatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 100%;
`
export const PostTitle = styled.div`
  flex-grow: 1;
  font-size: 1.2em;
  margin-left: 10px;
  color: ${theme('paper.article_title')};
`

export const PostTitleTag = styled.span`
  display: inline-block;
  font-size: 0.8em;
  color: #a8b8c6;
  margin-left: 10px;
  opacity: 0.7;
`
export const PostTitleTagDot = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 3px;
  border-radius: 2px;
  background-color: #9cd090;
  display: inline-block;
`

export const PostTitleLink = styled.span`
  position: relative;
  display: inline-block;
  font-size: 0.8em;
  color: #a8b8c6;
  margin-left: 10px;
  opacity: 0.7;
`

export const LinkIcon = styled(ReactSVG)`
  position: absolute;
  top: 6px;
  left: -5px;
  width: 12px;
  height: 12px;
`

export const PostExtra = styled.li`
  display: inline;
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 0.9em;
`

export const PostBodyBreif = styled.li`
  margin-top: 5px;
  color: ${theme('paper.article_brief')};
  margin-right: 20px;
  white-space: normal;
  display: block;
  font-size: 0.9em;
`

export const Pagi = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 30px;
`
