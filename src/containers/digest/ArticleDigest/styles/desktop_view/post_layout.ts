import styled from 'styled-components'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'
import css, { theme } from '@/utils/css'

export const Main = styled.div<{ metric: TMetric }>`
  ${({ metric }) => css.fitContentWidth(metric)};
  width: 100%;
  margin-top: 65px;
`
export const Header = styled.div`
  ${css.flex('align-both')};
  margin-bottom: 14px;
  position: relative;
`
export const PublishDateInfo = styled.div`
  font-size: 10px;
  color: ${theme('thread.articleDigest')};
`
export const CommunityInfo = styled.div`
  ${css.flex('align-start', 'justify-center')};
  margin-top: 5px;
  ${css.fitStickerWidth(METRIC.ARTICLE)};
`
export const Title = styled.div`
  font-size: 26px;
  text-align: center;
  color: ${theme('thread.articleTitle')};
  margin-bottom: 30px;
  ${css.lineClamp(3)};
`
export const BottomInfo = styled.div`
  ${css.flex('align-both')};
  padding-bottom: 30px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('border')};
  width: 100%;
  color: ${theme('thread.articleDigest')};
`
export const AuthorName = styled.a`
  color: ${theme('thread.articleDigest')};
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 1px;

  &:hover {
    text-decoration: underline;
    color: ${theme('thread.articleDigest')};
    cursor: pointer;
  }
`
