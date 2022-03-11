import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import {
  Logo as DefaultLogo,
  SiteTitle as DefaultSiteTitle,
  MainInfos as DefaultMainInfos,
} from './index'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 18px;
  margin-left: 25px;
`
export const Logo = styled(DefaultLogo)`
  ${css.size(16)};
  margin-right: 8px;
`
export const ShortName = styled.div`
  color: #005364;
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  margin-top: 1px;
`
export const SiteTitle = styled(DefaultSiteTitle)`
  color: #007fa8;
  font-size: 16px;
  font-weight: normal;
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
