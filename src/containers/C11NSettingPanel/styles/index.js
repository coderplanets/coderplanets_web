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
export const TabBarWrapper = styled.div`
  margin-bottom: 20px;
  margin-left: -8px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid;
  border-bottom-color: #0a465a;
`
