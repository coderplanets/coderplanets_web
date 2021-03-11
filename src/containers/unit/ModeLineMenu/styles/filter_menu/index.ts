import styled from 'styled-components'

// import Img from '@/Img'
import { css } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flexColumn('align-start')};
  margin-top: 25px;
  width: 100%;
  min-height: 200px;
  padding: 0;
`
export const holder = styled.div``
