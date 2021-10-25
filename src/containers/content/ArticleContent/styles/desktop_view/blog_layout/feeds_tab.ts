import styled from 'styled-components'

import css from '@/utils/css'
import { theme } from '@/utils/themes'

export const Wrapper = styled.div`
  margin-bottom: 18px;
`
export const Header = styled.div`
  ${css.flex('align-center', 'justify-between')};
`
export const Title = styled.a`
  font-size: 15.5px;
  color: ${theme('thread.articleTitle')};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #139c9e;
    cursor: pointer;
  }
`
export const PubDate = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-right: 10px;
  opacity: 0.8;
`
export const Digest = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  margin-top: 7px;

  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`
