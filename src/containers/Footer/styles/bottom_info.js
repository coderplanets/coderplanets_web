import styled from 'styled-components'

import { theme, cs } from '@utils'

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
`
export const Copyrights = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const Thanks = styled.div`
  color: ${theme('thread.articleDigest')};
  &:hover {
    cursor: pointer;
  }
`
export const ThxTitle = styled.div``
