import styled from 'styled-components'

import { Img } from '../../../components'

export const Container = styled.div`
  padding: 20px;
  min-height: 300px;
  display: flex;
`

export const BodyWrapper = styled.div`
  font-size: 1.3em;
  width: 73%;
`

export const SideWrapper = styled.div`
  min-height: 180px;
  height: 100%;
  margin-left: 7%;
  padding-left: 20px;
  max-width: 200px;
  flex-wrap: wrap;
  border-left: 1px solid #d9e6e5;
`

export const CommunityTitle = styled.div`
  color: #56868a;
  font-size: 1em;
`

export const SidebarTitle = styled.div`
  color: #56868a;
  font-size: 1em;
`

export const SidebarDesc = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 10px;
  padding-bottom: 15px;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  border-bottom: ${props => (props.noBottom ? '' : '1px solid #D9E6E5')};
  max-width: 100%;
  flex-wrap: wrap;
`

export const CommunityIcon = styled(Img)`
  width: 25px;
  height: 25px;
  margin-right: 6px;
`

export const TagWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
  margin-left: 2px;
`
export const TagDot = styled.div`
  width: 10px;
  height: 10px;
  background: tomato;
  border-radius: 50%;
  margin-right: 5px;
`
export const TagTitle = styled.div`
  margin-top: -5px;
`

export const RelatedUser = styled.img`
  border-radius: 100%;
  width: 25px;
  height: 25px;
  margin-right: 8px;
  margin-bottom: 5px;
`
