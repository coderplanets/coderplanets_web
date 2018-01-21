import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { Button } from '../../../components'

export const Wrapper = styled.div``

/* fill: ${theme('shell.search_icon')}; */
export const WritePostBtn = styled(Button)`
  width: 80%;
  margin-left: 8%;
`
export const FilterWrapper = styled.div`
  margin-bottom: 8px;
  margin-left: 8px;
  display: flex;
`
export const FilterResultHint = styled.div`
  margin-top: 4px;
  margin-right: 15px;
  color: #edc48a;
`

export const TagDivider = styled.div`
  width: 80%;
  /* border-bottom: 1px solid #ececec; */
  margin-top: 50px;
  margin-bottom: 30px;
  margin-left: 8%;
`

export const PostWrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background: #f3f6f9;
  }
`

export const PostAvatar = styled.img`
  width: 80%;
  border-radius: 100%;
`
export const PostTitle = styled.h2`
  margin-bottom: 0px;
  color: #61868c;
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

export const PostInfo = styled.ul``

export const PostExtra = styled.li`
  display: inline;
  opacity: 0.7;
  transition: opacity 0.2s;
`

export const PostBodyBreif = styled.li`
  margin-top: 5px;
  color: #aaa;
  margin-right: 20px;
  white-space: normal;
  display: block;
`
