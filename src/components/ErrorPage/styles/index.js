import styled from 'styled-components'

import { theme, css, WIDTH } from '@/utils'
import Img from '@/Img'
import PromptIcon from '@/components/PromptIcon'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center', 'justify-between')};
  height: 100vh;
  width: ${WIDTH.ARTICLE.PAGE};
  background: ${theme('banner.bg')};
  background-image: url('https://www.transparenttextures.com/patterns/transparent-square-tiles.png');
  border-top: 4px solid;
  border-top-color: #ff8c77;
`

export const LogoWrapper = styled.div`
  align-self: center;
  margin-right: -5px;
  margin-top: 5px;
`
export const CPSMdLogo = styled(Img)`
  width: 200px;
`
export const IconsWrapper = styled.div`
  ${css.flex('justify-center')};
  align-items: center;
`

export const TextWrapper = styled.div`
  ${css.flexColumn('align-center')};
  margin-top: 40px;
`
export const HintTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1.2rem;
  margin-bottom: 10px;
`
export const HintDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: 4px;
  font-size: ${({ small }) => (small ? '1rem' : '1.1rem')};
`

export const Error404Icon = styled(PromptIcon)`
  width: 240px;
  height: 240px;
`

export const ErrorDivider = styled.div`
  border-right: 1px solid;
  border-color: ${theme('thread.articleDigest')};
  height: 150px;
  margin-left: 25px;
  margin-right: 25px;
`

export const ErrorNumber = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 4rem;
  align-self: center;
  font-weight: bolder;
`

export const HintWrapper = styled.div`
  ${css.flexColumn()};
  margin-top: -15%;
  color: ${theme('banner.title')};
`

export const FooterWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-bottom: 20px;
`

export const IssueLink = styled.a`
  text-decoration: underline;
  font-weight: bolder;
  transition: color 0.3s;
  color: ${theme('banner.title')};
  margin-left: 5px;

  &:hover {
    color: ${theme('banner.title')};
    cursor: pointer;
  }
`
