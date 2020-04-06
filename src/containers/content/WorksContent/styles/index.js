import styled from 'styled-components'

import { cs } from '@utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flexColumn()};
  min-height: 100vh;
`
export const ContentWrapper = styled.div`
  ${cs.flex()};
  padding: 0 5vw;
`
