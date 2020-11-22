import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')};
  width: 100%;
  max-width: ${({ metric }) => css.getPageMaxWidth(metric)};
`
export const InnerWrapper = styled.div`
  ${css.flexColumn('justify-center')};
  width: 100%;
  max-width: ${({ metric }) => css.getContentMaxWidth(metric)};
`
export const ContentWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  min-height: calc(100vh - 350px); /* 350 is the banner max height */
  transition: all 0.25s;
`
