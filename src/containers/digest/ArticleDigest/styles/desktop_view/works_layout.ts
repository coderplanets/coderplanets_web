import styled from 'styled-components'

import type { TMetric } from '@/spec'
import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Main = styled.div<{ metric: TMetric }>`
  ${({ metric }) => css.fitContentWidth(metric)};
  width: 100%;
`
export const WorksWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Intro = styled.div`
  ${css.flexColumn()};
  width: 100%;
  margin-left: 10px;
`
export const Cover = styled(Img)`
  ${css.size(85)};
  border-radius: 4px;
  margin-right: 20px;
`
export const Title = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 3px;
  margin-right: 8px;
`
export const WorkName = styled.div`
  ${css.cutRest('200px')};
  font-size: 24px;
  color: ${theme('thread.articleTitle')};
`
export const Desc = styled.div`
  font-size: 15px;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 12px;
  ${css.cutRest('330px')};
`
export const Other = styled.div`
  ${css.flex('justify-between', 'align-end')};
`
export const Actions = styled.div`
  ${css.flex('align-center')};
`
export const SubWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex('align-start', 'justify-end')};
  margin-top: 5px;
  ${({ metric }) => css.fitStickerWidth(metric)};
`
export const BottomInfo = styled.div`
  position: relative;
  ${css.flex('align-end', 'justify-between')};
  color: ${theme('thread.articleDigest')};
  margin-top: 30px;
  padding-bottom: 36px;
  border-bottom: 1px solid;
  border-bottom-color: #004251;
  width: 100%;
`
export const TabsWrapper = styled.div`
  position: absolute;
  top: 3px;
  left: -5px;
`
export const AuthorName = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
