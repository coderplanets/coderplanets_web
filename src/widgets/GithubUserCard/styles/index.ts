import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex()};
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
  ${css.flexColumn()};
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
  ${css.flex('align-center')};
`
export const LabelIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(15)};
  margin-right: 5px;
`
export const LabelText = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const UserCompany = styled.div`
  ${css.flex('align-center')};
`
