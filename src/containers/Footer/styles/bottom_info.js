import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center', 'justify-between')};
  /*  TODO:  remove footer.bottomBg key */
  /* background: ${theme('footer.bottomBg')}; */
  border-top: 1px solid;
  border-top-color: #02394a;
  height: 60px;
  width: 100%;

  ${cs.media.tablet`display: none;`};
`
export const InnerWrapper = styled.div`
  ${cs.flex('justify-between')};
  color: ${theme('thread.articleDigest')};
  align-items: center;
  width: 100%;
  max-width: ${cs.MAX_CONTENT_WIDTH};
  padding: 0 5vw;
  padding-right: 80px;

  ${cs.media.laptopLPadding};
`
export const Links = styled.div`
  ${cs.flex('align-center')};
`
export const Site = styled.a`
  color: ${theme('thread.articleDigest')};
  cursor: pointer;
  margin-right: 12px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: ${theme('footer.hover')};
  }
`
export const MoreText = styled(Site)`
  text-decoration: underline;
  margin-right: 22px;
`
