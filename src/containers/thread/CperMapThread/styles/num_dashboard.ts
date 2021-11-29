import styled from 'styled-components'

import type { TActive } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

type TChartBar = TActive & { width: string }

export const Wrapper = styled.div`
  ${css.flexColumn()};
  position: absolute;
  z-index: 1;
  left: 20px;
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
  width: 60px;
  text-align: center;
`
export const Divider = styled.div<TActive>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  border-bottom: 1px dashed;
  border-bottom-color: ${theme('thread.articleDigest')};
  margin-top: 4px;
  margin-bottom: 4px;
  width: 80%;
  margin-left: 8%;
  opacity: 0.5;
`
export const Chart = styled.div`
  ${css.flexGrow()};
`
export const ChartBar = styled.div<TChartBar>`
  height: ${({ active }) => (active ? '4px' : '3px')};

  width: ${({ width }) => width};
  background: ${({ active }) =>
    active ? theme('geoMap.markerBg') : theme('thread.articleDigest')};
`
