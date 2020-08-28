import styled from 'styled-components'

// import { cs, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  margin-top: 16px;
  margin-left: -15px;
`
export const Title = styled.div``
