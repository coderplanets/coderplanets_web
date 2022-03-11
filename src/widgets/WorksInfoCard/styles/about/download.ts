import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import AppleIcon from '@/icons/Apple'
import AndroidIcon from '@/icons/Android'

export const Wrapper = styled.div`
  ${css.flex('justify-between')};
  margin-top: 15px;
`
export const PlatformWrapper = styled.div`
  ${css.flex('align-center')};
  background: #0d3d4e;
  border-radius: 6px;
  padding: 3px 8px;
`
export const AppleLogo = styled(AppleIcon)`
  ${css.size(20)};
  fill: ${theme('thread.articleTitle')};
  margin-right: 6px;
`
export const AndroidLogo = styled(AndroidIcon)`
  ${css.size(20)};
  fill: ${theme('thread.articleTitle')};
  margin-right: 6px;
`
export const PlatformIntro = styled.div``
export const PlatformDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 10px;
`
export const PlatformTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  margin-top: -5px;
`
