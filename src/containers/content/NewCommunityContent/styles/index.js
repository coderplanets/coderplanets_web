import styled from 'styled-components'

import { cs, theme } from '@utils'

// import Img from '@components/Img'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
`
export const ContentWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  min-height: calc(100vh - 350px); /* 350 is the banner max height */
  padding-left: 4vw;
  padding-right: 4vw;
  transition: all 0.25s;
`
