import styled from 'styled-components'

// import Img from '@/components/Img'
// import { cs } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  margin-top: 20px;
  height: 100%;
  padding: 0 6vw;
`
export const Title = styled.div``
