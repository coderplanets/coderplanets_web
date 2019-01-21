import styled from 'styled-components'

import { theme, cs } from 'utils'
import Img from 'Img'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  width: 100%;
  margin-top: 5%;
  margin-bottom: 30px;
`

export const ConstructIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 300px;
  height: 300px;
`

export const Icon = styled.div``
export const Text = styled.div`
  text-align: center;
`

// border-bottom: 1px solid;
// border-bottom-color: ${theme('thread.articleDigest')}
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 1.4rem;
`

export const DescWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: 0.6rem;
  font-size: 0.9rem;
`
export const IssueLink = styled.a`
  margin-left: 3px;
  text-decoration: none;
  color: ${theme('banner.title')};
  transition: color 0.3s;
  text-decoration: underline;
  &:hover {
    font-weight: bolder;
    text-decoration: underline;
    color: ${theme('banner.title')};
  }
`
