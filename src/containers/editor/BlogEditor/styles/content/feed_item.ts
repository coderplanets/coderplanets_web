import styled from 'styled-components'
import TimeAgo from 'timeago-react'

import css from '@/utils/css'
import { theme } from '@/utils/themes'

import ReadableDate from '@/components/ReadableDate'
import EditPenSVG from '@/icons/EditPen'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
  margin-bottom: 14px;
`
export const EditIcon = styled(EditPenSVG)`
  ${css.size(16)};
  fill: ${theme('thread.articleDigest')};
  margin-top: 3px;
  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
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
export const Title = styled.div<{ withEdit: boolean }>`
  color: ${theme('thread.articleTitle')};
  margin-right: 8px;
  font-size: 16.5px;

  ${Wrapper}:hover & {
    color: ${({ withEdit }) =>
      withEdit ? theme('thread.articleTitle') : '#12979a'};
    cursor: ${({ withEdit }) => (withEdit ? 'normal' : 'pointer;')};
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

export const PubDateWrapper = styled.div<{ withEdit: boolean }>`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-top: 3px;
  margin-right: 10px;
  min-width: 195px;

  ${Wrapper}:hover & {
    color: ${({ withEdit }) =>
      withEdit ? theme('thread.articleTitle') : '#12979a'};
    cursor: ${({ withEdit }) => (withEdit ? 'normal' : 'pointer;')};
  }
`
export const AbsDate = styled(ReadableDate)`
  font-size: 12px;
  opacity: 0.85;
`
export const RelDate = styled(TimeAgo)`
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
export const Digest = styled.div<{ withEdit: boolean }>`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  margin-top: 5px;

  ${Wrapper}:hover & {
    color: ${({ withEdit }) =>
      withEdit ? theme('thread.articleTitle') : '#12979a'};
    cursor: ${({ withEdit }) => (withEdit ? 'normal' : 'pointer;')};
    opacity: 0.8;
  }
`
