import styled from 'styled-components'

import Img from 'components/Img'
import { theme, cs } from 'utils'

export const Wrapper = styled.div`
  margin-right: 20px;

  ${cs.media.mobile`
    margin-right: 0;
  `};
`

export const PopMenu = styled.div`
  ${cs.flexColumn()};
`

export const MenuItem = styled.div`
  padding: 4px 13px;
  color: ${theme('thread.articleTitle')};
  opacity: 0.9;
  &:hover {
    background: ${theme('thread.articleHover')};
    opacity: 1;
    cursor: pointer;
  }
`

export const MenuLink = styled.a`
  padding: 4px 13px;
  color: ${theme('thread.articleTitle')};
  opacity: 0.9;
  &:hover {
    background: ${theme('thread.articleHover')};
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
    color: ${theme('baseColor.error')};
    background: ${theme('thread.articleHover')};
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
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 12px;
  border-radius: 3px;
  opacity: ${theme('avatarOpacity')};
`
export const DefaultUserIcon = styled(Img)`
  fill: ${theme('header.fg')};
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 12px;
  display: block;
`
