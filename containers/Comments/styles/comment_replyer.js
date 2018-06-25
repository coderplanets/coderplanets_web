import styled from 'styled-components'

import { Img } from '../../../components'
import { WORD_LIMIT } from '../../../config'
import { theme } from '../../../utils'
import { ReplyBarBase, ReplyToBodyBase, ReplyToFloorBase } from './index'

export const ReplyBar = ReplyBarBase.extend`
  margin-left: 10px;
`
export const ReplyToBody = ReplyToBodyBase.extend``
export const ReplyToFloor = ReplyToFloorBase.extend``

export const Container = styled.div`
  background: ${theme('preview.articleBg')};
  min-height: 200px;
  height: 100%;
  border-color: ${theme('preview.articleBg')};
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  border-radius: 3px;
`

export const InputHeaderWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin-right: 20px;
`
export const InputEditorWrapper = styled.div`
  min-height: 180px;
  max-height: 60vh;
  overflow-y: scroll;
  margin: 0 10px;
  margin-bottom: 10px;
  display: block;
  font-size: 1.4em;
`
export const UserAvatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-left: 3%;
`
export const LeaveResponseText = styled.div`
  font-size: 1.3em;
  margin-left: 10px;
  color: lightgrey;
`
export const LeaveResponseUsername = styled.div`
  font-size: 1.3em;
  margin-left: 8px;
  color: #96b3b5;
  margin-right: 10px;
`

export const ReferToIcon = styled(Img)`
  fill: #b7cfd0;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-top: 5px;
`

export const ReplyAvatars = styled.div``

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #c2d9da;
`
export const CounterSpliter = styled.div`
  font-size: 1.5em;
  font-weight: lighter;
  color: ${theme('comment.placeholder')};
`

const getColor = num => {
  if (num > WORD_LIMIT.COMMENT) {
    return 'tomato'
  } else if (num >= WORD_LIMIT.COMMENT - 50 && num <= WORD_LIMIT.COMMENT) {
    return 'orange'
  }
  return 'yellowgreen'
}

export const CounterCur = styled.div`
  margin-right: 5px;
  font-size: 1em;
  color: ${props => getColor(props.num)};
`

export const CounterTotal = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  font-size: 1em;
  color: ${theme('comment.placeholder')};
`

export const PreviewWrapper = styled.div`
  min-height: 200px;
  padding: 0 20px;
`
