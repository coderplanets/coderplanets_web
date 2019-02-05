import styled from 'styled-components'

import { theme, cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  flex-grow: 1;
  width: 48%;
  max-width: 60%;
`
export const Header = styled.div`
  ${cs.flex('align-center')};
`
export const Middle = styled.div`
  ${cs.flex('align-end')};
  padding: 5px 0;
  margin-bottom: 2px;
`
export const Footer = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
  ${cs.media.mobile`
    ${cs.truncate('150px')};
  `};
`
export const CommunitiesWrapper = styled.div`
  margin-left: 5px;
  margin-top: -1px;
`
export const SalaryWrapper = styled.div`
  font-size: 0.9rem;
  color: ${theme('contrastFg')};
  margin-right: 16px;
  margin-top: -1px;
`
export const BackgroundWrapper = styled.div`
  ${cs.flex()};
`
export const TagsWrapper = styled.div`
  margin-top: -1px;
`

export const Background = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: 0.85rem;
  ${cs.media.mobile`display: none`};
`
export const Degree = styled.div``
export const Exp = styled.div``

export const Extra = styled.div`
  ${cs.flex('align-center')};
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 0.8rem;
`
export const ExpDivider = styled.div`
  margin-left: 4px;
  margin-right: 4px;
`

export const PublishInfo = styled.div`
  ${cs.media.tablet`
    display: none;
  `};
`
