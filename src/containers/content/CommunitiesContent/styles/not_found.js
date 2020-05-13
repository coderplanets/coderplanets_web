import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-center')};
  flex-wrap: wrap;
`
export const SearchValueFocus = styled.span`
  color: ${theme('banner.title')};
  &:before {
    content: '"';
  }

  &:after {
    content: '"';
  }
`
export const EmptyCard = styled.div`
  ${cs.flexColumn('align-center')};
  position: relative;
  padding-top: 2%;
  width: 500px;
  height: 250px;
  background: ${theme('content.cardBg')};
  border: 1px solid;
  border-color: ${theme('content.cardBorder')};
  border-radius: 3px;
  margin-left: -5%;
  margin-bottom: 10%;
`
export const EmptyTitle = styled.div`
  margin-top: 30px;
  color: ${theme('thread.articleTitle')};
  font-size: 1.2rem;
`
export const EmptyDesc = styled.div`
  margin-top: 30px;
  color: ${theme('thread.articleDigest')};
  font-size: 1rem;
`

export const IssueLink = styled.a`
  color: ${theme('banner.title')};
  margin-left: 3px;
  margin-right: 3px;

  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: ${theme('banner.title')};
    text-decoration: underline;
  }
`
