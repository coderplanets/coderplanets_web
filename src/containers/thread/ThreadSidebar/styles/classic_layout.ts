import styled from 'styled-components'

import type { TActive, TTestable } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  min-width: 200px;
  max-width: 200px;
  padding-top: 15px;

  ${css.media.tablet`display: none;`};
`
export const StickyWrapper = styled.div`
  ${css.flexColumn()};
`
export const CommunityJoinersTitle = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  margin-bottom: 15px;
  font-weight: 600;
`
export const CommunityJoinersNum = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  background: #f5f5f5;
  font-size: 11px;
  font-weight: 600;
  margin-left: 5px;
  padding: 0 6px;
  border-radius: 5px;
`
export const CommunityJoinersWrapper = styled.div<TActive>`
  ${css.flex()};
  flex-wrap: wrap;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  margin-bottom: ${({ show }) => (show ? '15px' : 0)};
  height: ${({ show }) => (show ? 'auto' : 0)};
`
export const JoinerAvatar = styled(Img)`
  ${css.circle(30)};
  margin-right: 8px;
`
export const CommunityNoteWrapper = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 18px;

  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  line-height: 1.62;
  letter-spacing: 0.5px;
`
export const PublishWrapper = styled.div<TActive>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  width: 160px;
  max-width: 180px;
`
export const NoteWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  font-size: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid;
  border-bottom-color: #003b49;
`

export const TagsBarWrapper = styled.div`
  margin-top: 25px;
  max-width: 160px;
`
