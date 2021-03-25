import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

import {
  Wrapper as DefaultWrapper,
  Logo as DefaultLogo,
  SiteTitle as DefaultSiteTitle,
  InfoBar as DefaultInfoBar,
} from './index'

export const Wrapper = styled(DefaultWrapper)``
export const InfoBar = styled(DefaultInfoBar)``
export const Logo = styled(DefaultLogo)`
  ${css.size(18)};
  margin-right: 8px;
`
export const SiteTitle = styled(DefaultSiteTitle)`
  color: #007fa8;
  font-size: 18px;
  font-weight: normal;
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

export const MainInfos = styled.div`
  ${css.flex('justify-between')};
  margin-top: 20px;
  margin-bottom: 30px;
  margin-right: 12px;
  margin-left: 5px;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
  transition: opacity 0.25s;

  ${css.media.tablet`display: none;`};
`
