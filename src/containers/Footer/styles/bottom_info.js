import styled from 'styled-components'

import { SiteDesc } from './digest_view'
import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('justify-center')};
  background: ${theme('footer.bottomBg')};
  height: 40px;
  width: 100%;

  ${cs.media.tablet`display: none;`};
`
export const InnerWrapper = styled.div`
  ${cs.flex('justify-between')};
  align-items: center;
  width: 100%;
  max-width: ${cs.MAX_CONTENT_WIDTH};
  padding: 0 5vw;
  padding-right: 80px;

  ${cs.media.laptopLPadding};
`
export const Copyrights = styled.div``
export const Thanks = styled.div`
  color: ${theme('thread.articleDigest')};
  &:hover {
    cursor: pointer;
  }
`
export const ThxTitle = styled.div``

export const BeianLink = styled(SiteDesc)`
  margin-bottom: 0;
`
