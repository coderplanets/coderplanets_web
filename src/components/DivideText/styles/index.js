import styled from 'styled-components'

// import Img from '@/Img'
import { css } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('align-center')};
  width: 100%;
`
export const Content = styled.div`
  font-size: 13px;
  color: #0a5669;
  margin-left: 20px;
  margin-right: 20px;
`
export const LeftLine = styled.div`
  height: 1px;
  background: #07414f;
  flex-grow: 1;
`
export const RightLine = styled(LeftLine)``
