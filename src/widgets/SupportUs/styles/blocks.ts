import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-both')};
  flex-wrap: wrap;
  margin-left: 14px;
`
export const Block = styled.div`
  width: 300px;
  height: 150px;
  border: 1px solid;
  border-color: #004b5e;
  border-radius: 8px;
  margin-right: 28px;
  background: #003845;
  border-radius: 5px;
  margin-bottom: 28px;
  padding: 15px;

  &:hover {
    cursor: pointer;
    background: #0d3b49;
    border-color: ${theme('button.primary')};
  }

  transition: all 0.1s;
`
export const Icon = styled(Img)`
  ${css.size(16)};
  margin-right: 10px;
  fill: ${theme('thread.articleDigest')};
`
export const FeedIcon = styled(Icon)`
  transform: rotate(-30deg);
`
export const Title = styled.div`
  ${css.flex('justify-between', 'align-center')}
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
`
export const LinkIcon = styled(Img)`
  ${css.size(18)};
  fill: ${theme('button.primary')};
  opacity: 0;

  ${Block}:hover & {
    opacity: 1;
  }
`
export const MailIcon = styled(LinkIcon)`
  ${css.size(16)};
`
export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #004b5d;
  margin-top: 10px;
  margin-bottom: 15px;
  opacity: 0.5;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  line-height: 1.85;
`
