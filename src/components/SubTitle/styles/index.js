import styled from 'styled-components'

// import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${cs.flex('align-center')};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  flex-grow: 1;
  font-size: 14px;
`
export const OptionWrapper = styled.div``
