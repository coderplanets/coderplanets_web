import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  /*  TODO:  remove footer.bottomBg key */
  /* background: ${theme('footer.bottomBg')}; */
  border-top: 1px solid;
  border-top-color: #02394a;
  height: 60px;
  width: 100%;

  ${css.media.tablet`display: none;`};
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-between')};
  color: ${theme('thread.articleDigest')};
  align-items: center;
  width: 100%;
  max-width: ${({ metric }) => css.getContentMaxWidth(metric)};
  padding-left: 4px;
`
export const Links = styled.div`
  ${css.flex('align-center')};
`
export const Site = styled.a`
  color: ${theme('thread.articleDigest')};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: ${theme('footer.hover')};
  }
`
export const MoreText = styled(Site)`
  text-decoration: underline;
`
