import styled from 'styled-components'

import type { TC11NLayout } from '@/spec'
import { theme, css } from '@/utils'
import { C11N } from '@/constant'

export const Wrapper = styled.div<{ metric: string }>`
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
export const InnerWrapper = styled.div<{ layout: TC11NLayout }>`
  ${css.flexColumn('justify-start')};
  color: ${theme('thread.articleDigest')};
  width: 100%;
  margin-right: 20px;

  ${({ layout }) => (layout === C11N.CLASSIC ? 'padding-left: 20px;' : '')};
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
