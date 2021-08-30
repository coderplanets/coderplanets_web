import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

import type { TTestable } from '@/spec'
import Img from '@/Img'
// import PromptIcon from '@/components/PromptIcon'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-center', 'justify-between')};
  height: 100vh;
  width: 100%;
  z-index: 1;
  // background: ${theme('banner.bg')};
  background: rgba(0, 59, 74, 0.5);
`
export const LogoWrapper = styled.a.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
  margin-top: 20px;
  text-decoration: none;
`
export const SiteLogo = styled(Img)<{ src: string }>`
  ${css.size(20)};
  fill: ${theme('thread.articleDigest')};
  margin-bottom: 5px;
`
export const SiteTitle = styled.div`
  color: ${theme('thread.articleDigest')};
  font-family: 'Audiowide', cursive;
  font-size: 15px;
  margin-left: 10px;
`
export const IconsWrapper = styled.div`
  ${css.flex('align-center')};
  width: 380px;
  margin-left: 50px;
`
export const Planet1Wrapper = styled.div`
  margin-top: -48px;
`
export const Planet2Wrapper = styled.div`
  margin-left: -15px;
  margin-top: -10px;
`
export const OopsLetter = styled.div`
  margin-left: -10px;
  color: #2d9b83;
  font-size: 36px;
  margin-top: 12px;
  letter-spacing: 5px;
  font-style: italic;
  opacity: 0.6;
`
export const TextWrapper = styled.div`
  ${css.flexColumn('align-center')};
  margin-top: 80px;
  width: 520px;
`
export const HintWrapper = styled.div`
  ${css.flexColumn('align-center')};
`
export const HintTitle = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  color: ${theme('thread.articleTitle')};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`
export const HintDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  text-align: center;
  font-size: 15px;
  margin-top: 10px;
  line-height: 1.8;
`
export const FooterWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-bottom: 5%;
`
export const IssueLink = styled.a`
  text-decoration: underline;
  font-weight: bold;
  color: ${theme('thread.articleDigest')};
  margin-left: 3px;
  margin-right: 3px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: color 0.2s;
`
