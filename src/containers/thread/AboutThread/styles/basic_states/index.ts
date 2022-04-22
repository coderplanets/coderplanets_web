import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'
import PostSVG from '@/icons/Post'
import CommentSVG from '@/icons/Comment'
import UserSVG from '@/icons/User'
import EmojiSVG from '@/icons/Emoji'
import PulseSVG from '@/icons/Pulse'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex()};
  width: calc(100% + 38px);
  /* border: 1px solid; */
  margin-top: 30px;
  margin-bottom: 16px;
`
export const Block = styled.div`
  ${css.flexColumn('align-start')};
  width: 20%;
  height: 100px;
`
const IconWrapper = styled.div`
  ${css.circle(24)};
  ${css.flex('align-both')};
  margin-bottom: 12px;
  opacity: 0.65;
  margin-left: -1px;
`
export const UsersWrapper = styled(IconWrapper)`
  background: #c5e1f4;
`
export const ContentWrapper = styled(IconWrapper)`
  background: #d5c7e0;
`
export const CommentsWrapper = styled(IconWrapper)`
  background: #f9dfc9;
`
export const EmojisWrapper = styled(IconWrapper)`
  background: #bcede5;
`
export const TrendWrapper = styled(IconWrapper)`
  background: #dfdfdf;
`
export const UsersIcon = styled(UserSVG)`
  ${css.size(12)};
  fill: #2f71ff;
`
export const ContentIcon = styled(PostSVG)`
  ${css.size(14)};
  fill: #860075;
`
export const CommentIcon = styled(CommentSVG)`
  ${css.size(15)};
  fill: #e75908;
`
export const EmojiIcon = styled(EmojiSVG)`
  ${css.size(14)};
  fill: #00a88b;
`
export const TrendIcon = styled(PulseSVG)`
  ${css.size(14)};
  fill: ${theme('thread.articleTitle')};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-weight: 600;
  font-size: 13px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 10px;
`
export const Num = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 24px;
  font-weight: 600;
  margin-top: 5px;
`
export const TrendLineWrapper = styled.div`
  margin-top: 8px;
  margin-left: -5px;
  width: 100%;
`
