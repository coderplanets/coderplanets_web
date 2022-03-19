import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import GithubSVG from '@/widgets/Icons/GithubCat'
import TwitterSVG from '@/icons/Twitter'

export const UserName = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
`
export const Intro = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  margin-top: 10px;
`
export const IconLink = styled.a``
export const GithubIcon = styled(GithubSVG)`
  ${css.size(15)};
  fill: ${theme('thread.articleDigest')};
  margin-right: 10px;
`
export const TwitterIcon = styled(TwitterSVG)`
  ${css.size(15)};
  fill: ${theme('thread.articleDigest')};
`
