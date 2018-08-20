import styled from 'styled-components'

import { Img } from '../../../components'
import { theme, smokey } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
`

export const AvatarWrapper = styled.div`
  margin-right: 12px;
`

export const Avatar = styled(Img)`
  border-radius: 8px;
  width: 120px;
  height: 120px;
  margin-top: 5px;
`

export const BriefTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const UserTitle = styled.div`
  font-size: 1.2rem;
  color: ${theme('banner.title')};
  margin-bottom: 5px;
`

export const UserDesc = styled.div`
  color: ${theme('banner.desc')};
  display: flex;
`

export const DescLable = styled.div`
  font-size: 0.8rem;
  min-width: 70px;
`

export const SocialSpliter = styled.div`
  border-top: 1px solid;
  border-color: ${theme('header.spliter')};
  margin-top: 4px;
  padding-top: 5px;
`

export const SocialWrapper = styled.div`
  display: flex;
`

export const SocialIcon = styled(Img)`
  fill: ${theme('sidebar.bg')};
  width: 18px;
  height: 18px;
  margin-right: 8px;
  ${smokey};
`
