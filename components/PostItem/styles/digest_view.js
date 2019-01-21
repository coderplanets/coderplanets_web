import styled from 'styled-components'

import { theme, cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  width: 100%;
`
export const ContentWrapper = styled.div`
  ${cs.flex()};
`
export const Divider = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('thread.articleDigest')};
  opacity: 0.4;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 3px;
`
