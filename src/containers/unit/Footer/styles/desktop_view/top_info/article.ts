import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import {
  Wrapper as DefaultWrapper,
  Logo as DefaultLogo,
  InfoBar as DefaultInfoBar,
  SiteTitle as DefaultSiteTitle,
  MainInfos as DefaultMainInfos,
} from './index'

export const Wrapper = styled(DefaultWrapper)``
export const InfoBar = styled(DefaultInfoBar)``
export const Logo = styled(DefaultLogo)`
  ${css.size(16)};
  margin-right: 5px;
  margin-top: -1px;
`
export const ArticleTitle = styled(DefaultSiteTitle)`
  color: ${theme('footer.title')};
  ${css.cutRest('300px')};
  font-size: 15px;
  font-weight: normal;
  margin-top: -1px;
`
export const CommunityTitle = styled(ArticleTitle)`
  margin-right: 6px;
  text-decoration: none;
  margin-top: 0;
  &:hover {
    color: ${theme('footer.title')};
    cursor: pointer;
    text-decoration: underline;
  }
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
