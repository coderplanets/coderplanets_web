import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'
import UpvoteSVG from '@/icons/Upvote'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  width: 100%;
  min-height: 200px;
  margin-top: 18px;
`
export const InterviewWrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 18px;
  width: 100%;
  padding-right: 10px;

  &:hover {
    background: #022f39;
    border-radius: 3px;
    cursor: pointer;
  }
  transition: all 0.25s;
`
export const Avatar = styled(Img)`
  ${css.circle(20)};
  margin-top: 1px;
`
export const Intro = styled.div`
  ${css.flexColumn()};
  margin-left: 8px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
`
export const UpvoteWrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 2px;
`
export const UpvoteIcon = styled(UpvoteSVG)`
  ${css.size(13)};
  fill: ${theme('thread.articleTitle')};
  margin-right: 4px;
`
