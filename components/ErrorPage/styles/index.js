import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100vh;
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
  display: flex;
  justify-content: center;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`
export const HintTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1.5rem;
  margin-bottom: 10px;
`
export const HintDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: 4px;
  font-size: 1.1rem;
`

export const Error404Icon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 100px;
  height: 100px;
`

export const ErrorDivider = styled.div`
  border-right: 1px solid;
  border-color: ${theme('thread.articleDigest')};
  height: 100px;
  margin-left: 25px;
  margin-right: 25px;
`

export const ErrorNumber = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 3.8rem;
  align-self: center;
  font-weight: bolder;
`

export const HintWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  color: ${theme('thread.articleDigest')};
  margin-left: 5px;

  &:hover {
    color: ${theme('banner.title')};
    cursor: pointer;
  }
`
