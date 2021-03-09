import styled from 'styled-components'

import { theme, css } from '@/utils'

import Img from '@/Img'
// import PromptIcon from '@/components/PromptIcon'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flexColumn('align-center', 'justify-between')};
  height: 100vh;
  width: 100%;
  z-index: 1;
  // background: ${theme('banner.bg')};
  background: rgba(0,59,74, 0.5);
`
export const LogoWrapper = styled.a.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flex('align-center')};
  margin-top: 20px;
  margin-left: 20px;
  text-decoration: none;
`
export const SiteLogo = styled(Img)`
  ${css.size(20)};
  fill: ${theme('thread.articleTitle')};
  margin-bottom: 5px;
`
export const SiteTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-family: 'Audiowide', cursive;
  font-size: 15px;
  margin-left: 10px;
`
export const IconsWrapper = styled.div`
  ${css.flex('align-both')};
`
export const TextWrapper = styled.div`
  ${css.flexColumn('align-start')};
  margin-top: 80px;
  margin-left: 115px;
`
export const HintTitle = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  color: ${theme('thread.articleTitle')};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`
export const HintDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
`
export const HintWrapper = styled.div`
  ${css.flexColumn()};
  margin-top: -2%;
  margin-left: 1%;
  width: 650px;
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
