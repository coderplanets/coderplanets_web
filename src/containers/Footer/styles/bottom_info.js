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
  padding-right: 100px;
`
export const Copyrights = styled.div`
  margin-left: 10px;
`
export const Thanks = styled.div`
  color: ${theme('thread.articleDigest')};
  &:hover {
    cursor: pointer;
  }
`
export const ThxTitle = styled.div``

export const BeianLink = styled(SiteDesc)``
