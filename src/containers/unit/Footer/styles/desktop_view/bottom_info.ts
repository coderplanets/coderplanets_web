import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  /*  TODO:  remove footer.bottomBg key */
  /* background: ${theme('footer.bottomBg')}; */
  border-top: 1px solid;
  border-top-color: #02394a;
  width: 100%;
  padding-top: 18px;
  padding-bottom: 30px;

  ${css.media.tablet`display: none;`};
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
