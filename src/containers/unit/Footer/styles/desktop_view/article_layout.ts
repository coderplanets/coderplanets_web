import styled from 'styled-components'

import type { TC11NLayout, TMetric } from '@/spec'
import { C11N } from '@/constant'
import css, { theme } from '@/utils/css'

export { HeartCrabIcon } from './home_layout'

type TWrapper = { metric: TMetric; layout: TC11NLayout }
export const Wrapper = styled.div<TWrapper>`
  ${css.flexColumn('align-end')};
  width: 100%;
  ${({ metric }) => css.fitContentWidth(metric)};

  padding: ${({ layout }) => (layout === C11N.CLASSIC ? '0 14px' : '')};
`
export const InnerWrapper = styled.div`
  width: 100%;
`
export const MainInfos = styled.footer`
  margin-bottom: 20px;
  ${css.media.tablet`display: none;`};
`
const Link = styled.a`
  text-decoration: none;
  font-weight: bolder;
  color: ${theme('footer.text')};
  transition: color 0.2s;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: ${theme('footer.hover')};
  }
`
export const BaseInfo = styled.div`
  ${css.flex()};
`
export const Item = styled(Link)`
  ${css.flex('align-center')};
  margin-right: 25px;
`
export const NoLinkItem = styled.div`
  margin-right: 25px;
  color: ${theme('footer.text')};
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: ${theme('footer.hover')};
  }
`
