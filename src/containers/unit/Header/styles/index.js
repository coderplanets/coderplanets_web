import styled from 'styled-components'

import { theme } from '@/utils'

export const Wrapper = styled.header.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  position: 'relative';
`
export const MobileWrapper = styled.div`
  width: 100%;
  height: 6px;
  background: ${theme('header.bg')};
`
