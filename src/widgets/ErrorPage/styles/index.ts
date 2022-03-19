import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import type { TTestable } from '@/spec'

import SiteLogoSVG from '@/icons/CPLogo'

// import PromptIcon from '@/widgets/PromptIcon'

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
export const SiteLogo = styled(SiteLogoSVG)`
  ${css.size(18)};
  fill: ${theme('thread.articleDigest')};
  margin-bottom: 2px;
`
export const SiteTitle = styled.div`
  color: ${theme('thread.articleDigest')};
  font-family: 'Audiowide', cursive;
  font-size: 15px;
  margin-left: 4px;
`
export const IconsWrapper = styled.div`
  ${css.flex('align-center')};
  width: 380px;
  margin-left: 50px;
  ${css.media.mobile`
    width: 320px;
    margin-left: 30px;
  `};
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
  margin-top: -5px;
  font-weight: bold;
  letter-spacing: 5px;
  font-style: italic;
  opacity: 0.6;
`
export const TextWrapper = styled.div`
  ${css.flexColumn('align-center')};
  margin-top: 80px;
  width: 520px;

  ${css.media.mobile`
    width: 320px;
  `};
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
