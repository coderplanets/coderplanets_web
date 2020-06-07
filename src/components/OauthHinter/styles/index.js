import styled from 'styled-components'

import { theme, animate, cs } from '@/utils'
import Img from '@/Img'

export const Container = styled.div`
  ${cs.flexColumn('justify-between')};
  align-items: center;

  height: 100vh;
  background: ${theme('banner.bg')};
  background-image: url('https://www.transparenttextures.com/patterns/transparent-square-tiles.png');
  border-top: 4px solid;
  border-top-color: ${theme('preview.topLine')};
`

export const CPSMdLogoWrapper = styled.div`
  align-self: center;
  margin-right: -5px;
  margin-top: 5px;
`
export const CPSMdLogo = styled(Img)`
  width: 200px;
`
export const IconsWrapper = styled.div`
  ${cs.flex('justify-center')};
`

export const TextWrapper = styled.div`
  ${cs.flexColumn('align-center')};
  margin-top: 15px;
`
export const HintTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1.2rem;
`
export const HintDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: 4px;
`

// fill: ${theme('font')};
export const CPSLogoIcon = styled(Img)`
  width: 53px;
  height: 53px;
  margin-top: -5px;
`
export const LinkIcon = styled(Img)`
  fill: #6e967f;
  width: 23px;
  height: 23px;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 16px;
  animation: ${animate.rotate360} 1s linear infinite;
`
export const GithubLogoIcon = styled(Img)`
  fill: ${theme('sidebar.bg')};
  width: 50px;
  height: 50px;
`
export const HintWrapper = styled.div`
  ${cs.flexColumn()};
  margin-top: -15%;
  color: ${theme('banner.title')};
`
export const FooterWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-bottom: 10px;
`
export const IssueLink = styled.a`
  text-decoration: underline;
  font-weight: bolder;
  transition: color 0.3s;
  color: ${theme('thread.articleDigest')};

  &:hover {
    color: ${theme('banner.title')};
    cursor: pointer;
  }
`
