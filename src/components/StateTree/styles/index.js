import styled from 'styled-components'

import { theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-testid': props.testId,
}))`
  padding: 25px;
  padding-top: 15px;
  z-index: 1;
`
export const Header = styled.div`
  border-bottom: 1px dashed ${theme('font')};
  margin-left: 5px;
  margin-bottom: 5%;
  padding-bottom: 10px;
`
