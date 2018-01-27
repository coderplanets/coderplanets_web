import styled from 'styled-components'
import ReactSVG from 'react-svg'

// import { theme } from '../../../utils'

export const Divider = styled.span`
  margin: 0 8px;
  display: inline-block;
  height: 0.9em;
  align-self: center;
  border-right: 1px solid #d1d1d2;
`

// border-bottom: 1px solid #e0e0e0;
export const PreviewHeaderWrapper = styled.div`
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

export const ReactionAction = styled.div`
  display: flex;
  padding: 0 3px;
  &:hover {
    cursor: pointer;
    font-weight: bold;
    background: #ebf5f5;
    border-radius: 6px;
  }
`

export const ReactionName = styled.div`
  align-self: center;
  color: #7f979a;
  font-size: 0.9em;
  margin-left: 1px;
`
export const ReactionUserNum = styled.div`
  align-self: center;
  color: #7f979a;
  font-size: 0.9em;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const ReactionIcon = styled(ReactSVG)`
  margin-top: 4px;
  fill: grey;
  width: ${props => (props.width ? props.width : '1.5em')};
  height: ${props => (props.height ? props.height : '1.5em')};
`

export const Reaction = styled.div`
  align-self: center;
  font-size: 1.2em;
  display: flex;
`
