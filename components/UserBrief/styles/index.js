import styled from 'styled-components'

import Img from '../../Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex()};
`
export const AvatarWrapper = styled.div`
  ${cs.flexColumn()};
  margin-right: 12px;
`
export const Avatar = styled(Img)`
  border-radius: 4px;
  width: ${({ displayStyle }) =>
    displayStyle === 'default' ? '120px' : '80px'};
  height: ${({ displayStyle }) =>
    displayStyle === 'default' ? '120px' : '80px'};
  margin-top: 6px;
  margin-bottom: 8px;
  cursor: ${({ hover }) => (hover ? 'pointer' : 'none')};
`
export const BriefTextWrapper = styled.div`
  ${cs.flexColumn()};
  margin-left: 10px;
`
export const UserTitle = styled.div`
  ${cs.flex()};
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
  ${cs.circle('5px')};
  background: ${theme('banner.desc')};
  margin-left: 4px;
  margin-right: 4px;
`
export const BackgroundItem = styled.div`
  ${cs.flex('align-center')};
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
