import styled from 'styled-components'

import { METRIC } from '@/constant'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export { NoLinkItem } from './article_layout'

export const Wrapper = styled.div`
  ${css.flexColumn('align-start')};
  width: 100%;
  ${css.fitContentWidth(METRIC.WORKS)};
`
export const InnerWrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
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
  margin-right: 25px;
`
