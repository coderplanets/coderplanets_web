import styled from 'styled-components'

import Img from '@/Img'
import type { TC11NLayout, TMetric } from '@/spec'
import { C11N } from '@/constant'
import css, { theme } from '@/utils/css'

type TWrapper = { metric: TMetric; layout: TC11NLayout }
export const Wrapper = styled.div<TWrapper>`
  ${css.flexColumn('align-end')};
  width: 100%;
  ${({ metric }) => css.fitContentWidth(metric)};
  padding-right: ${({ layout }) =>
    layout === C11N.CLASSIC ? '250px' : '100px'};
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-center')};
  width: 100%;
  margin-top: -20px;
  margin-bottom: 50px;
`
export const SupportBadge = styled.div`
  ${css.flex('align-center')};
`
export const Logo = styled(Img)`
  fill: ${theme('footer.text')};
  ${css.size(15)};
`
export const LinkText = styled.a`
  color: ${theme('footer.text')};
  cursor: pointer;

  &:hover {
    color: ${theme('footer.title')};
  }
`
