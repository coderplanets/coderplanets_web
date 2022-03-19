import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  margin-bottom: 8px;
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
`
export const HintTitle = styled.div<{ highlight: boolean }>`
  font-size: 13px;
  color: ${({ highlight }) =>
    highlight ? '#12989B' : theme('thread.articleDigest')};
  margin-bottom: 10px;
  margin-left: 2px;
`
