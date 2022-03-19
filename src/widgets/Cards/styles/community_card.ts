import styled from 'styled-components'

// import type { TTestable } from '@/spec'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

import UserSVG from '@/icons/User'
import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 200px;
  min-height: 100px;
  padding-left: 8px;
`
export const CommunityLogo = styled(CommunityFaceLogo)`
  ${css.size(30)};
`
export const SubsInfo = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
`
export const Info = styled.div`
  ${css.flexColumn()};
  flex-grow: 1;
  margin-left: 16px;
`
export const Header = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 6px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  font-weight: bold;
`
export const SubInfo = styled.div`
  width: 100%;
  ${css.flex('align-center')};
  margin-top: 2px;
`
export const Raw = styled.a`
  text-decoration: none;
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 1px;
  position: relative;
  padding-left: 6px;

  &:before {
    content: '/';
    position: absolute;
    top: 2px;
    left: 0;
    font-size: 12px;
    margin-right: 2px;
  }

  &:hover {
    text-decoration: underline;
    color: ${theme('thread.articleDigest')};
    opacity: 1;
  }
`
export const UserIcon = styled(UserSVG)`
  ${css.size(10)};
  fill: ${theme('thread.articleDigest')};
  margin-right: 3px;
  opacity: 0.8;
`
export const UserCount = styled.div`
  fill: ${theme('thread.articleTitle')};
  font-size: 13px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
