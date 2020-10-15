import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const ContentWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  min-height: calc(100vh - 350px); /* 350 is the banner max height */
  padding-left: 4vw;
  padding-right: 4vw;
  transition: all 0.25s;
`
