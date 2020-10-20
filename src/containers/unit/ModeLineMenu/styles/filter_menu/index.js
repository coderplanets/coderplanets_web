import styled from 'styled-components'

// import Img from '@/Img'
import { css } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn('align-center', 'justify-start')};
  margin-top: 42px;
  width: 100%;
  min-height: 200px;
  padding: 0;
`
export const SearchBoxWrapper = styled.div`
  ${css.flex('align-both')};
  padding: 0 8px;
  height: 30px;
  width: 75%;
  border-radius: 10px;
  background: #0b3440;
`
