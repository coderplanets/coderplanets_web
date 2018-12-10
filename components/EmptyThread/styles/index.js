import styled from 'styled-components'

import Img from '../../Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  width: 100%;
  margin-top: 10%;
  margin-bottom: 30px;
`

export const Icon404 = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 300px;
  height: 300px;
`

export const Icon = styled.div``
export const Text = styled.div`
  text-align: center;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('thread.articleDigest')}
  padding-bottom: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 1.4rem;
`

export const DescWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: 0.6rem;
  font-size: 0.9rem;
`
const Link = styled.a`
  text-decoration: none;
  font-weight: bolder;
  color: ${theme('header.fg')};
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
    color: ${theme('baseColor.error')};
  }
`
export const IssueLink = styled(Link)`
  margin-left: 3px;
`
