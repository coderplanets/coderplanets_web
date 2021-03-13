import styled from 'styled-components'

import { VIEW } from '@/constant'
import { theme, css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
/* align-items: ${({ view }) =>
    view === VIEW.DESKTOP ? 'center' : 'flex-start'}; */
export const BriefTextWrapper = styled.div`
  margin-top: 35px;
`
export const UserTitle = styled.div`
  ${css.flex()};
  color: ${theme('thread.articleTitle')};
  font-size: 22px;
  margin-bottom: 12px;
`
export const Bio = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
`

type TUserDesc = { clickable: boolean; hide: boolean }
export const UserDesc = styled.div<TUserDesc>`
  color: ${theme('banner.desc')};
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  font-size: 15px;
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
export const DescLabel = styled.div`
  min-width: 70px;
  opacity: 0.9;
`
export const DescIconLabel = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(16)};
  margin-right: 10px;
`
export const BackgroundDivider = styled.div`
  ${css.circle(5)};
  background: ${theme('banner.desc')};
  margin-left: 4px;
  margin-right: 4px;
`
export const BackgroundItem = styled.div`
  ${css.flex('align-center')};
`
export const BackgroundDetailItem = styled(BackgroundItem)`
  margin-bottom: 8px;
`
export const DetailToggleLabel = styled(DescIconLabel)<{ reverse: boolean }>`
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
`
export const ToggleText = styled.div`
  font-size: 0.9rem;
`
export const Divider = styled.div`
  border-top: 1px solid;
  border-color: ${theme('thread.articleDigest')};
  opacity: 0.3;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
`
