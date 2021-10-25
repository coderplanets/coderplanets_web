import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import PromptIcon from '@/widgets/PromptIcon'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  width: 100%;
  margin-top: 5%;
  margin-bottom: 30px;
`

// TODO: media size
export const Icon404 = styled(PromptIcon)`
  width: 320px;
  height: 320px;

  ${css.media.tablet`
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
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 17px;
  ${css.media.tablet`
    font-size: 15px;
  `};
`
export const DescWrapper = styled.div`
  opacity: 0.8;

  ${css.media.tablet`
    font-size: 12px;
  `};
`
export const Desc = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 4px;
`
const Link = styled.a`
  text-decoration: none;
  font-weight: bolder;
  color: #47a29d;
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
    color: #47a29d;
  }
`
export const IssueLink = styled(Link)`
  margin-left: 3px;
`
