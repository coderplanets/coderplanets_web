import styled from 'styled-components'
import ReactSVG from 'react-svg'

// import { theme } from '../../../utils'

export const PreviewHeader = styled.div`
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
  padding-top: 10px;
  padding-bottom: 6px;
`
export const UserInfo = styled.div`
  flex-grow: 1;
  display: flex;
`

export const UserName = styled.div`
  margin-bottom: 2px;
  font-size: 1.2em;
  color: #66868b;
`
export const PublishAt = styled.div`
  font-size: 0.9em;
`

export const Avatar = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

export const ReactionWrapper = styled.div`
  display: flex;
`

export const ReactionIcon = styled(ReactSVG)`
  margin-top: 4px;
  fill: grey;
  width: ${props => (props.width ? props.width : '28px')};
  height: ${props => (props.height ? props.height : '28px')};
`

export const ReactionNum = styled.div`
  color: #7f979a;
  align-self: center;
  margin-left: 3px;
  font-size: 0.9em;
`

export const Reaction = styled.div`
  margin-left: 15px;
  align-self: center;
  font-size: 1.2em;
  display: flex;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`
