import styled from 'styled-components'

import { theme, cs } from '../../../utils'

export const BannerContainer = styled.div`
  ${cs.flexColumn('justify-center')};

  position: relative;
  min-height: 170px;
  border-bottom: 1px solid tomato;
  background: ${theme('banner.bg')};
  border-bottom: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 160px;
  }
`
export const ContentWrapper = styled.div`
  ${cs.flexColumn('align-center')};
  justify-content: center;
  width: 100%;
  margin-top: -30px;
`
export const Title = styled.div`
  color: ${theme('banner.title')};
  font-size: 1.1rem;
`
export const Desc = styled.div`
  ${cs.flex()};
  color: ${theme('banner.desc')};
  font-size: 0.9rem;
  margin-top: 3px;
`
export const IssueLink = styled.a`
  color: ${theme('banner.title')};
  margin-left: 3px;
  margin-right: 3px;

  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: ${theme('thread.title')};
    text-decoration: underline;
  }
`

export const TabberWrapper = styled.div`
  ${cs.flex('justify-center')};

  position: absolute;
  bottom: -16px;
  width: 80vw;
`

export const BannerContentWrapper = styled.div`
  ${cs.flex()};
  margin-left: 8%;
  margin-right: 8%;
`
