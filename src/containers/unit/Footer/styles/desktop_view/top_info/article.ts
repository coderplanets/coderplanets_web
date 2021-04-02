import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

import {
  Wrapper as DefaultWrapper,
  Logo as DefaultLogo,
  SiteTitle as DefaultSiteTitle,
  InfoBar as DefaultInfoBar,
  MainInfos as DefaultMainInfos,
} from './index'

export const Wrapper = styled(DefaultWrapper)``
export const InfoBar = styled(DefaultInfoBar)``
export const Logo = styled(DefaultLogo)`
  ${css.size(18)};
  margin-right: 8px;
`
export const ArticleTitle = styled(DefaultSiteTitle)`
  color: ${theme('footer.title')};
  font-size: 15px;
  font-weight: normal;
  margin-top: -2px;
`
export const CommunityTitle = styled(ArticleTitle)`
  margin-right: 6px;
`
export const ArrowDividerIcon = styled(Img)`
  fill: ${theme('footer.text')};
  ${css.size(20)};
  transform: rotate(180deg);
  margin-right: 6px;
`
export const Linker = styled.a`
  color: ${theme('footer.title')};
  display: block;
  text-decoration: none;
  margin-left: 24px;
  opacity: 0.8;

  font-size: 14px;

  &:hover {
    color: ${theme('footer.hover')};
    text-decoration: underline;
    cursor: pointer;
    opacity: 1;
  }
  transition: all 0.2s;
`

export const MainInfos = styled(DefaultMainInfos)``
