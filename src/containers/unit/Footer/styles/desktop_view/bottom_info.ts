import styled from 'styled-components'

import type { TMetric } from '@/spec'
import css, { theme } from '@/utils/css'

const Wrapper = styled.div<{ metric: TMetric }>`
  ${css.flex('align-center', 'justify-between')};
  /*  TODO:  remove footer.bottomBg key */
  /* background: ${theme('footer.bottomBg')}; */
  border-top: 1px solid;
  border-top-color: #e1e1e1; // to-theme
  width: 100%;
  padding-top: 18px;
  padding-bottom: 30px;

  ${({ metric }) => css.fitContentWidth(metric)};
  ${css.media.tablet`display: none;`};
`
export const RawWrapper = styled(Wrapper)``
export const ClassicWrapper = styled(Wrapper)`
  padding-left: 22px;
  padding-right: 60px;
  ${css.media.laptopM`
    padding-left: 18px;
  `}
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-between')};
  width: 100%;
  margin-right: 20px;
`
export const BeianLink = styled.a`
  color: ${theme('footer.text')};
  text-decoration: none;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${theme('footer.hover')};
  }
`
export const PowerByWrapper = styled.div`
  color: ${theme('footer.text')};
  ${css.flex('align-center')};
`
export const PowerByLink = styled(BeianLink)`
  margin-right: 4px;
  margin-left: 6px;
`
