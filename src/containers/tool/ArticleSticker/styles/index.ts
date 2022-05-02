import styled from 'styled-components'

import type { TTestable, TMetric, TActive } from '@/spec'
import Img from '@/Img'
import css, { theme, animate } from '@/utils/css'

type TWrapper = { metric: TMetric } & TTestable
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flexColumn('align-center', 'justify-start')};
  ${({ metric }) => css.fitStickerWidth(metric)};
  min-height: 60vh;
`
export const InnerWrapper = styled.div`
  ${css.flexColumn('justify-between')}
  height: 100%;
  width: 100%;
`
export const MainWrapper = styled.div`
  ${css.flexColumn('align-center')};
`
const Icon = styled(Img)`
  ${css.size(22)};
  transition: all 0.2s;
  cursor: pointer;
`
export const CommunityIcon = styled(Icon)``
export const CommunityTitle = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-bottom: 8px;
`
export const Divider = styled.div`
  width: 50px;
  height: 1px;
  background: #004250;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const LikeIcon = styled(Icon)`
  fill: #0c5473;
  ${css.size(22)};

  &:hover {
    fill: ${theme('baseColor.red')};
    animation: ${animate.pulse} 0.25s linear;
  }
`
export const CollectIcon = styled(Icon)`
  fill: #0c5473;

  &:hover {
    fill: #107eae;
    cursor: pointer;
  }
`
export const ShareIcon = styled(Icon)`
  fill: #0c5473;
  ${css.size(16)};
  margin-left: -1px;
`
export const Number = styled.div`
  ${css.flex('align-baseline')};
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  margin-top: 5px;
`
export const Text = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 11px;
`

export const GoTopWrapper = styled.div<TActive>`
  ${css.flex('align-both')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  position: absolute;
  bottom: -140px;
  width: 100%;
`
