import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

import ReadableDate from '@/widgets/ReadableDate'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
  margin-bottom: 14px;
`
export const Header = styled.div`
  position: relative;
  ${css.flex('align-start')};
`
export const Selector = styled.div`
  position: absolute;
  top: 3px;
  left: -35px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-right: 8px;
  font-size: 16.5px;
`
export const HoverTitle = styled(Title)<TActive>`
  color: ${({ $active }) =>
    $active ? '#12979a' : theme('thread.articleTitle')};

  ${Wrapper}:hover & {
    color: #12979a;
    cursor: pointer;
  }
`
export const BlogLink = styled.a`
  font-size: 11px;
  margin-top: 4px;
  color: ${theme('thread.articleDigest')};
  text-decoration: none;
  min-width: 30px;
  opacity: 0.8;

  &:hover {
    color: ${theme('thread.articleTitle')};
    text-decoration: underline;
    cursor: pointer;
  }

  ${Wrapper}:hover & {
    opacity: 1;
  }

  transition: 0.2s opacity;
`

export const PubDateWrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-top: 3px;
  margin-right: 10px;
  min-width: 195px;
`

export const HoverPubDateWrapper = styled(PubDateWrapper)<TActive>`
  color: ${({ $active }) =>
    $active ? '#12979a' : theme('thread.articleDigest')};
  ${Wrapper}:hover & {
    color: #12979a;
    cursor: pointer;
  }
`
export const AbsDate = styled(ReadableDate)`
  font-size: 12px;
  opacity: 0.85;
`
export const RelDate = styled.div`
  font-size: 12px;
  opacity: 0.95;
  margin-left: 5px;
  &::before {
    content: '(';
  }
  &::after {
    content: ')';
  }
`
export const Digest = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  margin-top: 5px;
`
export const HoverDigest = styled(Digest)<TActive>`
  color: ${({ $active }) =>
    $active ? '#12979a' : theme('thread.articleDigest')};

  ${Wrapper}:hover & {
    color: #12979a;
    cursor: pointer;
    opacity: 0.8;
  }
`
