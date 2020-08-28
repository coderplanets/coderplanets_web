import styled from 'styled-components'

import { cs } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${cs.flexColumn('align-start', 'justify-start')};
  width: auto;
  height: 100%;
  padding: 10px;
  margin: 20px;
  margin-top: 10px;
  margin-left: 60px;
  margin-bottom: 120px;
`
export const TabberWrapper = styled.div`
  margin-bottom: 20px;
  margin-left: -8px;
`
