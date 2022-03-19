import styled from 'styled-components'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'
import css, { theme } from '@/utils/css'
import LinkSVG from '@/icons/Link'

export const Main = styled.div<{ metric: TMetric }>`
  ${({ metric }) => css.fitContentWidth(metric)};
  width: 100%;
`
export const Header = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 8px;
`
export const LinkInfo = styled.a`
  ${css.flex('align-both')};
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  text-decoration: none;

  &:hover {
    color: #0f888b;
    text-decoration: underline;
    cursor: pointer;
  }
`
export const LinkIcon = styled(LinkSVG)`
  ${css.size(16)};
  fill: ${theme('thread.articleDigest')};
  margin-right: 3px;
  margin-left: -2px;
`
export const CommunityInfo = styled.div`
  ${css.flex('align-start', 'justify-center')};
  margin-top: 5px;
  ${css.fitStickerWidth(METRIC.ARTICLE)};
`
export const Title = styled.div`
  font-size: 26px;
  color: ${theme('thread.articleTitle')};
  margin-bottom: 30px;
`
export const BottomInfo = styled.div`
  position: relative;
  ${css.flex('align-end', 'justify-between')};
  margin-top: 15px;
  padding-bottom: 65px;
  border-bottom: 1px solid;
  border-bottom-color: #004251;
  width: 100%;
  color: ${theme('thread.articleDigest')};
`
export const AuthorName = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
export const TabWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: -8px;
`
