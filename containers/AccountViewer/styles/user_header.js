import styled from 'styled-components'
import ReactSVG from 'react-svg'

export const UserWrapper = styled.div`
  display: flex;
`
export const UserHeader = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 5px;
`

export const UserInfo = styled.div`
  display: flex;
  flex-grow: 1;
`

export const Avatar = styled.img`
  border-radius: 100%;
  width: 40px !important;
  height: 40px;
  margin-right: 10px;
`
export const UserBrief = styled.div`
  display: flex;
  flex-direction: column;
`
export const BriefInfo = styled.div`
  color: #aaaaaa;
  margin-left: 5px;
  font-size: 1em;
  display: flex;
`
export const UserName = styled.div`
  margin-left: 5px;
  margin-bottom: 3px;
  font-size: 1.3em;
  color: #5c868b;
  display: flex;
`

export const EditIcon = styled(ReactSVG)`
  fill: tomato;
  width: 20px;
  height: 20px;
  cursor: pointer;
  opacity: 0.4;
  margin-left: 5px;
  margin-top: 4px;

  &:hover {
    opacity: 0.8;
  }
  transition: opacity 0.2s;
`

export const SocalIcon = styled(ReactSVG)`
  fill: tomato;
  margin-top: 10px;
  margin-right: 7px;
  width: 22px;
  height: 22px;
  cursor: pointer;
  opacity: 0.4;

  &:hover {
    opacity: 0.8;
  }
  transition: opacity 0.2s;
`
