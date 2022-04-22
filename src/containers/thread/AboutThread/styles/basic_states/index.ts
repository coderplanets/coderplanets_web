import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'
import PostSVG from '@/icons/EditPen'
import CommentSVG from '@/icons/Comment'
import UserSVG from '@/icons/Users'
import EmojiSVG from '@/icons/Heart'
import PulseSVG from '@/icons/Pulse'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex()};
  width: calc(100% + 38px);
  margin-top: 30px;
  margin-bottom: 22px;
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
  background: #ffd5dc;
`
export const TrendWrapper = styled(IconWrapper)`
  background: #def0ba;
`
export const UsersIcon = styled(UserSVG)`
  ${css.size(14)};
  fill: #2f71ff;
`
export const ContentIcon = styled(PostSVG)`
  ${css.size(12)};
  fill: #860075;
  margin-top: 1px;
`
export const CommentIcon = styled(CommentSVG)`
  ${css.size(15)};
  fill: #e75908;
  margin-left: 1px;
  margin-top: 1px;
`
export const EmojiIcon = styled(EmojiSVG)`
  ${css.size(14)};
  fill: #ff1717;
`
export const TrendIcon = styled(PulseSVG)`
  ${css.size(14)};
  fill: #2a7c43;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 2px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 10px;
  opacity: 0.8;
`
export const Num = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 22px;
  font-weight: 600;
  margin-top: 5px;
`
export const TrendLineWrapper = styled.div`
  margin-top: 6px;
  margin-left: -5px;
  width: 100%;
`
