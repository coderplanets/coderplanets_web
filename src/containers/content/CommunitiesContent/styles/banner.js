import styled from 'styled-components'

import { theme, cs } from '@utils'

import Img from '@Img'

export const BannerContainer = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flexColumn('justify-center')};

  position: relative;
  min-height: 170px;
  border-bottom: 1px solid;
  /* background: ${theme('banner.bg')}; */
  border-bottom: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 160px;
  }
`
export const IntroWraper = styled.div`
  ${cs.flexColumn('align-both')};
  color: ${theme('thread.articleDigest')};
  /* background-image: linear-gradient(#043B49, #022A35); */
  background-image: ${theme('banner.linearGradient')};
  width: 100%;
  height: 250px;
`
export const IntroTitle = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  margin-bottom: 20px;
  margin-left: -10px;
`
export const IntroDesc = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  margin-left: -10px;
  opacity: 0.9;
`
export const SlogenTextWrapper = styled.div`
  margin-left: 3px;
  margin-right: 3px;

  font-weight: ${({ highlight }) => (highlight ? 'bold' : '')};
  color: ${({ highlight }) =>
    highlight ? theme('thread.articleTitle') : theme('thread.articleDigest')};
`
export const CreateCommunityLink = styled.a`
  color: #327faf;
  margin-right: 3px;

  &:hover {
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
  }
`
export const SearchIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 16px;
  height: 16px;
  display: block;
  margin-right: 6px;
`
export const Title = styled.div`
  color: ${theme('banner.title')};
  font-size: 1.1rem;
`
