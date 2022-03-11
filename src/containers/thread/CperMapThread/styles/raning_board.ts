import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

type TChartBar = TActive & { width: string }

export const Wrapper = styled.div`
  ${css.flexColumn()};
  position: absolute;
  z-index: 1;
  left: 37px;
  bottom: 100px;
  border-radius: 5px;
  width: 150px;
  transition: width 0.2s linear;
`
export const DashItem = styled.div`
  ${css.flex('align-center')};
`
export const Title = styled.div<TActive>`
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  width: 56px;
  font-size: 12px;
  text-align: left;
`
export const Divider = styled.div`
  border-bottom: 1px dashed;
  border-bottom-color: ${theme('thread.articleDigest')};
  margin-top: 8px;
  margin-bottom: 8px;
  width: 100%;
  opacity: 0.3;
`
export const TotalWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`
export const TotalNum = styled.span`
  color: ${theme('thread.articleTitle')};
  margin-left: 20px;
`
export const Chart = styled.div`
  ${css.flexGrow()};
`
export const ChartBar = styled.div<TChartBar>`
  height: ${({ active }) => (active ? '4px' : '3px')};
  margin-top: ${({ active }) => (active ? '0' : '-1px')};
  width: ${({ width }) => width};
  border-radius: 5px;
  background: ${({ active }) =>
    active ? theme('button.primary') : theme('thread.articleDigest')};
`
