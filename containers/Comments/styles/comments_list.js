import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { theme, column, Animate } from '../../../utils'
import { ReplyBarBase, ReplyToBodyBase, ReplyToFloorBase } from './index'

export const ReplyBar = ReplyBarBase.extend`
  margin-left: -2px;
`
export const ReplyToBody = ReplyToBodyBase.extend``
export const ReplyToFloor = ReplyToFloorBase.extend``

// min-height: 300px;
export const ListsContainer = styled.div`
  ${column};
  border-radius: 4px;
`

export const ListTitle = styled.div`
  color: #62868a;
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 1.1em;
  margin-left: 2px;
`

export const TotalNum = styled.span`
  color: orange;
  font-size: 1.3em;
`

export const FloorNum = styled.div`
  color: #b5ddb3;
  font-size: 1rem;
  align-self: center;
  margin-left: 5px;
  flex-grow: 1;
`

export const CommentBlock = styled.div`
  display: flex;
  margin-bottom: 16px;
  padding: 15px;
  padding-left: 20px;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  background: ${theme('preview.article_bg')};
`

// filter: blur(3px);
export const CommentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  filter: ${props => (props.tobeDelete ? 'blur(3px)' : '')};
`
export const DeleteHintText = styled.div`
  color: tomato;
  font-size: 1.3em;
  margin-bottom: 10px;
`
export const DeleteOverlay = styled.div`
  position: absolute;
  margin-top: -15px;
  margin-left: -20px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  animation: ${Animate.pulse} 0.3s linear;
`
export const DeleteBtnGroup = styled.div`
  display: flex;
`

export const CommentUserInfo = styled.div`
  margin-right: 15px;
`

export const CommentAvatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`

export const CommentHeader = styled.div`
  margin-bottom: 12px;
  ${column};
`

export const CommentHeaderFirst = styled.div`
  display: flex;
`

export const CommentUserName = styled.div`
  color: #678689;
  font-size: 1.3em;
  display: flex;
  flex-grow: 1;
`

export const TimeStamps = styled.div`
  color: #9a9a9a;
`

export const CommentBodyInfo = styled.div`
  width: 100%;
  ${column};
`
export const CommentContent = styled.div`
  color: #888894;
  font-size: 1.1em;
`

export const CommentFooter = styled.div`
  margin-top: 15px;
  display: flex;
`
export const Actions = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: -4px;
`

export const ReplyUsers = styled.div`
  display: flex;
  margin-top: -4px;
`
export const ReplyTitle = styled.div`
  color: #c5dadb;
  margin-top: 4px;
  margin-right: 5px;
`

export const VisiableAction = styled.div`
  display: flex;
  color: #90a5a6;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`

export const ActionNumber = styled.div`
  font-size: 1.2em;
`

export const LikeIcon = styled(ReactSVG)`
  fill: #6b8688;
  margin-right: 3px;
  margin-top: 2px;
  width: 20px;
  height: 20px;
`

export const UpIcon = styled(ReactSVG)`
  fill: #6b8688;
  margin-right: 3px;
  margin-top: 2px;
  width: 20px;
  height: 20px;
`

export const DownIcon = styled(ReactSVG)`
  fill: #6b8688;
  margin-right: 3px;
  margin-top: 2px;
  width: 20px;
  height: 20px;
  transform: rotate(180deg);
`

export const ReplyIcon = styled(ReactSVG)`
  fill: #6b8688;
  margin-right: 5px;
  margin-top: 1px;
  width: 18px;
  height: 18px;
`

export const ReplyAction = styled.div`
  display: flex;
  color: #90a5a6;
  margin-right: 12px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 2px;
  opacity: 0;

  ${CommentBodyInfo}:hover & {
    opacity: 1;
  }
  transition: opacity 0.3s;
`

export const Pagi = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 30px;
`
