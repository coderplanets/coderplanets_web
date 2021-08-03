import styled from 'styled-components'

import type { TMetric } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

const Wrapper = styled.div<{ metric: TMetric }>`
  ${css.flex('align-center', 'justify-between')};
  /*  TODO:  remove footer.bottomBg key */
  /* background: ${theme('footer.bottomBg')}; */
  border-top: 1px solid;
  border-top-color: #02394a;
  width: 100%;
  padding-top: 18px;
  padding-bottom: 30px;

  ${({ metric }) => css.fitContentWidth(metric)};
  ${css.media.tablet`display: none;`};
`
export const RawWrapper = styled(Wrapper)``
export const ClassicWrapper = styled(Wrapper)`
  padding-left: 24px;
  ${css.media.laptopM`
    padding-left: 18px;
  `}
`
export const HolyGrailWrapper = styled(Wrapper)`
  padding-left: 24px;

  ${css.media.laptopM`
    padding-left: 18px;
  `}
`

export const InnerWrapper = styled.div`
  ${css.flexColumn('justify-start')};
  color: ${theme('thread.articleDigest')};
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
export const CompanyLink = styled(BeianLink)`
  font-size: 12px;
  margin-bottom: 2px;
`
