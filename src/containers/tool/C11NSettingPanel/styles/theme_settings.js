import styled from 'styled-components'

// import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  margin-top: 16px;
  /* margin-left: 30px; */
`
export const Title = styled.div``
