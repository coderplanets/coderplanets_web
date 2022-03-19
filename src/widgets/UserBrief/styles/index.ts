import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import WomanSVG from '@/icons/Woman'
import { Divider as DividerBase } from '@/widgets/Common'

export const Wrapper = styled.div`
  ${css.flexColumn()};
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
export const Divider = styled(DividerBase)`
  width: 90%;
`
