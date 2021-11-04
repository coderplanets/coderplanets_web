import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'
import WomanSVG from '@/icons/Woman'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
/* align-items: ${({ view }) =>
    view === VIEW.DESKTOP ? 'center' : 'flex-start'}; */
export const BriefTextWrapper = styled.div`
  margin-top: 35px;
`
export const UserTitle = styled.div`
  ${css.flex('justify-between', 'align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 24px;
  margin-bottom: 2px;
  width: 100%;
`
export const WomanIcon = styled(WomanSVG)`
  ${css.size(17)};
  fill: ${theme('baseColor.pink')};
  margin-top: 2px;
  margin-left: 8px;
`
export const ShortBio = styled.div`
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
`
export const Bio = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
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
