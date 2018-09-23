import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
`

export const AvatarWrapper = styled.div`
  margin-right: 12px;
  display: flex;
  flex-direction: column;
`

export const Avatar = styled(Img)`
  border-radius: 8px;
  width: ${({ displayStyle }) =>
    displayStyle === 'default' ? '120px' : '70px'};
  height: ${({ displayStyle }) =>
    displayStyle === 'default' ? '120px' : '70px'};
  margin-top: 6px;
  margin-bottom: 10px;
`

export const BriefTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const UserTitle = styled.div`
  display: flex;
  font-size: 1.2rem;
  color: ${theme('banner.title')};
  margin-bottom: 5px;
`

export const UserDesc = styled.div`
  color: ${theme('banner.desc')};
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  font-size: 0.9rem;
  margin-bottom: 2px;

  &:hover {
    cursor: ${({ clickable }) => (clickable ? 'pointer' : '')};
    font-weight: ${({ clickable }) => (clickable ? 'bolder' : '')};
    color: ${({ clickable }) =>
      clickable ? theme('banner.title') : theme('banner.desc')};
  }
`
export const UserDetailDesc = styled(UserDesc)`
  font-size: 0.95rem;
  margin-bottom: 6px;
  margin-top: 8px;
  font-weight: bold;
`
export const DescLable = styled.div`
  min-width: 70px;
  opacity: 0.9;
`
export const DescIconLable = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 16px;
  height: 16px;
  margin-right: 10px;
  margin-top: 4px;
`

export const BackgroundDivider = styled.div`
  width: 5px;
  height: 5px;
  background: ${theme('banner.desc')};
  border-radius: 50%;
  margin-left: 4px;
  margin-right: 4px;
`
export const BackgroundItem = styled.div`
  display: flex;
  align-items: center;
`
export const BackgroundDetailItem = styled(BackgroundItem)`
  margin-bottom: 8px;
`
export const DetailToggleLabel = styled(DescIconLable)`
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
`
export const ToggleText = styled.div`
  font-size: 0.9rem;
`
export const SocialSpliter = styled.div`
  border-top: 1px solid;
  border-color: ${theme('banner.desc')};
  margin-top: 4px;
  padding-top: 8px;
  opacity: 0.5;
`
export const SocialWrapper = styled.div`
  display: flex;
`

export const SocialIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  display: ${({ active }) => (active ? 'block' : 'none')};
  width: 18px;
  height: 18px;
  margin-right: 8px;
  opacity: 1;

  &:hover {
    fill: ${theme('banner.title')};
    cursor: pointer;
  }

  transition: fill 0.3s;
`

export const EditWrapper = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
`

export const EditIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 5px;
  margin-top: 4px;

  &:hover {
    fill: ${theme('banner.title')};
  }
  transition: opacity 0.2s;
`
