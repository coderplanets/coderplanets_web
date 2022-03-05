import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

import Button from '@/widgets/Buttons/Button'
import Img from '@/Img'
import NotifySVG from '@/icons/Notify'
import SearchSVG from '@/icons/HeaderSearch'

export const Wrapper = styled.div`
  ${css.flex('align-both')};
  color: ${theme('thread.articleDigest')};
  margin-right: 14px;
  font-weight: 600;
  margin-top: 0;
`
export const Avatar = styled(Img)`
  ${css.circle(24)};
  ${css.flex('justify-between')};
`
export const SubscribeButton = styled(Button)`
  margin-right: 18px;
  border-radius: 10px;
  padding: 1px 12px;
`
export const NotifyIcon = styled(NotifySVG)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(22)};
  margin-right: 18px;
  opacity: 0.8;
`
export const SearchIcon = styled(SearchSVG)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(20)};
  margin-right: 14px;
  opacity: 0.8;
`
