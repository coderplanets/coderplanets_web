import styled from 'styled-components'

import type { TMetric } from '@/spec'
import css, { theme } from '@/utils/css'

export { NoLinkItem } from './article_layout'
export { HeartCrabIcon } from './home_layout'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  width: 100%;
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const MainInfos = styled.footer`
  margin-bottom: 20px;
  ${css.media.tablet`display: none;`};
`
const Link = styled.a`
  text-decoration: none;
  font-weight: bolder;
  color: ${theme('footer.text')};
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
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
