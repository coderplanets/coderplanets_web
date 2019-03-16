import styled from 'styled-components'

import { theme, cs } from 'utils'
import PromptIcon from 'components/PromptIcon'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  width: 100%;
  margin-top: 5%;
  margin-bottom: 30px;
`

// TODO: media size
export const Icon404 = styled(PromptIcon)`
  width: 320px;
  height: 320px;

  ${cs.media.tablet`
    width: 200px;
    height: 200px;
`};
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
  margin-top: 10px;
  font-size: 1.3rem;
  ${cs.media.tablet`
    font-size: 1.1rem;
  `};
`

export const DetailText = styled.span`
  ${cs.media.mobile`
    display: none;
  `};
`

export const DescWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: 0.6rem;
  font-size: 0.9rem;

  ${cs.media.tablet`
    font-size: 0.8rem;
  `};
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
