import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('justify-center')};

  position: relative;
  min-height: 220px;
  border-bottom: 1px solid;
  /* background: ${theme('banner.bg')}; */
  border-bottom: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 200px;
  }
`
export const IntroWrapper = styled.div`
  ${css.flexColumn('align-both')};
  padding-top: 30px;
  padding-left: 50px;
  color: ${theme('thread.articleDigest')};
  /* background-image: linear-gradient(#043B49, #022A35); */
  background-image: ${theme('banner.linearGradient')};
  width: 100%;
  height: 500px;
  padding-bottom: 200px;

  ${css.media.mobile`
    padding-left: 0;
  `};
`
export const IntroTitle = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  margin-bottom: 20px;
  margin-left: -10px;
`
export const IntroDesc = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  margin-left: -10px;
  opacity: 0.9;
`
export const SloganTextWrapper = styled.div<{ highlight?: boolean }>`
  margin-left: 3px;
  margin-right: 3px;

  color: ${({ highlight }) =>
    highlight ? theme('thread.articleTitle') : theme('thread.articleDigest')};
`
export const CreateCommunityLink = styled.a`
  color: ${theme('button.primary')};
  margin-right: 3px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
  }
`
export const SearchIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(16)};
  margin-right: 6px;
`
export const Title = styled.div`
  color: ${theme('banner.title')};
  font-size: 1.1rem;
`
