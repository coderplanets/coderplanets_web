import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { theme } from '../../../utils'

export const Container = styled.div`
  background: ${theme('preview.article_bg')};
  min-height: ${props => (props.showInputEditor ? '100px' : '70px')};
  height: auto;
  border-color: ${theme('preview.article_bg')};
  display: flex;
  flex-direction: column;
  transition: all 0.3s;

  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
`
export const InputHeaderWrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  margin-right: 20px;
`
export const InputEditorWrapper = styled.div`
  height: auto;
  margin: 0 30px;
  max-height: 150px;
  display: ${props => (props.showInputEditor ? 'block' : 'none')};
  font-size: 0.9em;
`

export const InputFooter = styled.div`
  display: flex;
  padding: 0 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 15px;
`

export const InputHelper = styled.div`
  flex-grow: 1;
  display: flex;
`
export const HelperIcon = styled(ReactSVG)`
  fill: #b7cfd0;
  width: 20px;
  height: 20px;
  margin-right: 8px;

  &:hover {
    fill: #51abb2;
    cursor: pointer;
  }
`

export const InputSubmit = styled.div``

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
export const LeaveResponseUsername = styled.div`
  font-size: 1.3em;
  margin-left: 12px;
  color: #96b3b5;
  margin-right: 10px;
`

export const ReplyHint = styled.div`
  color: #b5cfd0;
  margin-top: 4px;
`
export const ReplyAvatars = styled.div`
  margin-left: 5px;
  margin-top: -8px;
`

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #c2d9da;
`
export const CounterSpliter = styled.div`
  font-size: 1.5em;
  font-weight: lighter;
`

export const CounterCur = styled.div`
  margin-right: 5px;
  font-size: 1em;
  color: yellowgreen;
`

export const CounterTotal = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  font-size: 1em;
`
