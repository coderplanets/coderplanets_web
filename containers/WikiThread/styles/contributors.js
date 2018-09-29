import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-left: 5px;
`
export const NoteTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
  font-weight: bold;
`
export const NoteDivider = styled.div`
  border-bottom-color: ${theme('banner.desc')};
  border-bottom: 1px solid;
  margin-top: 6px;
  margin-bottom: 6px;
  width: 90%;
  opacity: 0.4;
`
export const NoteDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
`
export const AvatarListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 5px;
  margin-top: 15px;
`
export const AvatarLink = styled.a``

export const Avatar = styled(Img)`
  width: 25px;
  height: 25px;
  border-radius: 3px;
  margin-right: 5px;
  margin-bottom: 5px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  transition: opacity 0.2s;
`
export const UserPopWrapper = styled.div`
  display: flex;
  padding: 10px;
  max-width: 300px;
`
export const PopAvatarWrapper = styled.div`
  margin-right: 10px;
  padding-top: 4px;
`
export const PopAvatar = styled(Img)`
  width: 80px;
  height: 80px;
`
export const UserPopInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const Username = styled.div`
  color: ${theme('thread.articleTitle')};
  font-weight: bolder;
  font-size: 1rem;
`
export const UserBio = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.9rem;
  margin-bottom: 10px;
`
export const UserLocation = styled.div`
  display: flex;
  align-items: center;
`
export const LabelIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 15px;
  height: 15px;
  display: block;
  margin-right: 5px;
`
export const LabelText = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const UserCompany = styled.div`
  display: flex;
  align-items: center;
`

export const SycNote = styled.div`
  margin-top: 15px;
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  padding-left: 5px;
`
