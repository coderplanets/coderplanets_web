import styled from 'styled-components'
import ReactSVG from 'react-svg'

export const Wrapper = styled.div``
export const ListTitle = styled.div`
  color: #62868a;
  margin-bottom: 16px;
`

export const InputWrapper = styled.div`
  background: #f9fcfc;
  height: 70px;
  border: 1px solid #cadbdc;
  border-radius: 3px;
  display: flex;
  align-items: center;
`
export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 4%;
`
export const LeaveResponseText = styled.div`
  font-size: 1.3em;
  margin-left: 15px;
  color: lightgrey;
`

export const ListsWrapper = styled.div`
  background: #f9fcfc;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  border-radius: 4px;
  padding: 10px;
`
export const CommentBlock = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  padding-left: 20px;
  position: relative;
`
export const CommentWrapper = styled.div`
  display: flex;
  // filter: blur(3px);
`

export const DeleteOverlay = styled.div`
  position: absolute;
  width: 97%;
  height: 100%;
  border: 1px dashed tomato;
  border-radius: 5px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`
export const CommentDivider = styled.div`
  border-bottom: 1px solid #eaeaea;
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
  margin-bottom: 5px;
  display: flex;
`

export const CommentUserName = styled.div`
  color: #678689;
  font-size: 1.3em;
  flex-grow: 1;
`

export const TimeStamps = styled.div``

export const CommentBody = styled.div`
  flex-glow: 1;
  display: flex;
  flex-direction: column;
`
export const CommentContent = styled.div`
  color: #888894;
  font-size: 1.1em;
  width: 95%;
`

export const CommentFooter = styled.div`
  margin-top: 10px;
  display: flex;
`

export const LikeAction = styled.div`
  display: flex;
  color: #90a5a6;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`

export const LikeIcon = styled(ReactSVG)`
  fill: #6b8688;
  margin-right: 3px;
  margin-top: 2px;
  width: 15px;
  height: 15px;
`

export const ReplyIcon = styled(ReactSVG)`
  fill: #6b8688;
  margin-right: 3px;
  margin-top: 2px;
  width: 17px;
  height: 17px;
`

export const ReplyAction = styled.div`
  display: flex;
  color: #90a5a6;
  margin-left: 10px;
  opacity: 0;

  cursor: pointer;
  font-weight: bold;
  ${CommentBody}:hover & {
    opacity: 1;
  }
  transition: opacity 0.3s;
`
export const FooterExtra = styled.div`
  flex-grow: 1;
`
