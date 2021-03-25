import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div<{ metric: string }>`
  ${css.flexColumn('align-center')};
  width: 100%;
  margin-top: 15px;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const InnerWrapper = styled.div`
  width: 100%;
`
export const MainInfos = styled.footer<{ center: boolean }>`
  ${css.flexColumn('align-center')};
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
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
