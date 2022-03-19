import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & { preview: boolean }>`
  background: ${({ preview }) => (preview ? '#0d3440' : 'transparent')};

  position: relative;
  ${css.flex('align-center')};
  height: 118px;
  width: 100%;
  min-width: 360px;
  padding: 6px 20px;
  padding-right: 15px;
  border-radius: 3px;

  border-top: 1px solid;
  border-top-color: #0b3b4a;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;

  :last-child {
    border-bottom: none;
  }

  ${css.media.mobile`
    height: 102px;
    padding-left: 2px;
    padding-top: 0;
    padding-bottom: 0;
  `};
  transition: all 0.1s;
`
export const IntroImg = styled(Img)`
  ${css.size(75)};
  border-radius: 5px;
  margin-top: 2px;

  ${css.media.mobile`
    ${css.size(42)};
    margin-top: -20px;
  `};
`
export const IntroImgHolder = styled.div`
  ${css.size(75)};
  border-radius: 5px;
  margin-top: 2px;
  background-color: #10404e;

  ${css.media.mobile`
    ${css.size(42)};
    margin-top: -20px;
  `};
`
export const IntroWrapper = styled.div`
  ${css.flexColumnGrow('align-start', 'justify-between')};
  margin-left: 28px;
  /* border: 1px solid green; */
  ${css.media.mobile`
    margin-left: 15px;
  `};
`
export const Header = styled.div`
  ${css.flex('justify-between', 'align-start')};
  width: 100%;
  ${css.media.mobile`
    padding-right: 3px;
  `};
`
export const Title = styled.div`
  ${css.flex('align-center')};
`
export const Name = styled.a`
  ${css.cutRest('280px')};
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
    text-decoration: underline;
  }

  ${css.media.mobile`
    ${css.cutRest('200px')};
  `};
`
export const PreviewName = styled(Name)`
  &:hover {
    cursor: text;
    text-decoration: none;
  }
`

export const OSSSign = styled.div`
  ${css.flex('align-center')};
  margin-top: 1px;
`
export const TypeTags = styled.div`
  ${css.flex('align-center')};
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  height: 32px;
`
export const FooterWrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  color: ${theme('thread.articleDigest')};
  width: 100%;
  font-size: 12px;
  margin-left: -3px;
`
export const Divider = styled.div`
  margin-right: 18px;
`
export const BuildWithWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 3px;
  margin-right: 6px;
  /* padding: 2px 5px; */
  /* background: linear-gradient(180deg, transparent 48%, rgb(13, 55, 70) 0); */
  margin-top: -2px;
`
export const TechIcon = styled(Img)`
  ${css.size(13)};
  margin-right: 8px;
  filter: saturate(0.5);
  opacity: 0.8;
  border-radius: 3px;

  ${Wrapper}:hover & {
    filter: saturate(1);
  }
`
export const GithubIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(10)};
`
export const PublishWrapper = styled.div`
  margin-top: -1px;
  margin-right: 15px;
`
