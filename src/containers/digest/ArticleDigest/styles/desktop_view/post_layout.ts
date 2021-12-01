import styled from 'styled-components'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Main = styled.div<{ metric: TMetric }>`
  ${({ metric }) => css.fitContentWidth(metric)};
  width: 100%;
`
export const Header = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 8px;
`
export const PublishDateInfo = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
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
  ${css.flex('align-end', 'justify-between')};
  margin-top: 15px;
  padding-bottom: 45px;
  border-bottom: 1px solid;
  border-bottom-color: #004251;
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
