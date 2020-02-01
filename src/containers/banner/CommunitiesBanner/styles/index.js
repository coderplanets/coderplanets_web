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
  border: 1px solid;
  border-color: #043b49;
  width: 100%;
  height: 200px;
`
export const IntroTitle = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  margin-bottom: 12px;
`
export const SearchIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 16px;
  height: 16px;
  display: block;
  margin-right: 6px;
`

// margin-left: -28px; is for center offset when doraemon popout
export const ContentWrapper = styled.div`
  ${cs.flexColumn('align-center')};
  justify-content: center;
  width: 100%;
  margin-top: -30px;
  margin-left: -28px;
`
export const Title = styled.div`
  color: ${theme('banner.title')};
  font-size: 1.1rem;
`
export const TabberWrapper = styled.div`
  ${cs.flex('justify-center')};

  position: absolute;
  bottom: -16px;
  width: 80vw;
`

export const BannerContentWrapper = styled.div`
  ${cs.flex()};
  display: none;
  margin-left: 8%;
  margin-right: 8%;
`
