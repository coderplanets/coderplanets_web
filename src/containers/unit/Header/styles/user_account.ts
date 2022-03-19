import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.media.mobile`
    padding: 0;
    padding-right: 10px;
  `};
`
export const PopMenu = styled.div`
  ${css.flexColumn()};
`
export const MenuItem = styled.div`
  padding: 4px 13px;
  color: ${theme('thread.articleTitle')};
  opacity: 0.9;
  &:hover {
    background: #113744;
    opacity: 1;
    cursor: pointer;
  }
`
export const MenuLink = styled.a`
  padding: 4px 13px;
  color: ${theme('thread.articleTitle')};
  opacity: 0.9;
  &:hover {
    background: #113744;
    opacity: 1;
    cursor: pointer;
    text-decoration: underline;
  }
`
export const LoginBadge = styled.div`
  padding: 7px 13px;
`
export const LoginDesc = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const LoginName = styled.div`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
`
export const LogoutItem = styled.div`
  padding: 5px 13px;
  padding-bottom: 6px;
  color: ${theme('thread.articleTitle')};
  &:hover {
    color: ${theme('baseColor.red')};
    background: #113744;
    cursor: pointer;
  }
`
export const MenuDivider = styled.div`
  margin-top: 3px;
  margin-bottom: 3px;
  border-bottom: 2px solid;
  border-bottom-color: ${theme('banner.numberDivider')};
`
export const AvatarIcon = styled.img`
  ${css.size(20)};
  cursor: pointer;
  border-radius: 3px;
  opacity: ${theme('avatar.opacity')};
`
export const DefaultUserIcon = styled(Img)`
  fill: ${theme('header.fg')};
  ${css.size(16)};
  cursor: pointer;
  margin-right: 2px;
  opacity: 0.5;
`
export const MembershipHint = styled.div`
  margin-left: 12px;
`
