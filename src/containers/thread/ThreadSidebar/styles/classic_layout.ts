import styled from 'styled-components'

import type { TActive, TTestable } from '@/spec'
import css, { theme } from '@/utils/css'
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
export const DividerTitle = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  font-weight: 600;
`
export const CommunityJoinersNum = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  background: ${theme('textBadge')};
  font-size: 11px;
  font-weight: 600;
  margin-left: 5px;
  padding: 0 6px;
  border-radius: 5px;
`
export const CommunityJoinersWrapper = styled.div<TActive>`
  ${css.flex()};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  margin-bottom: ${({ show }) => (show ? '15px' : 0)};
  height: ${({ show }) => (show ? 'auto' : 0)};
  margin-bottom: 25px;
`
export const JoinerAvatar = styled(Img)`
  ${css.circle(28)};
  margin-right: 8px;
`
export const CommunityNoteWrapper = styled.div`
  ${css.lineClamp(2)}
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 18px;
  line-height: 1.6;
`
export const PublishWrapper = styled.div<TActive>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  width: 185px;
  max-width: 185px;
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
