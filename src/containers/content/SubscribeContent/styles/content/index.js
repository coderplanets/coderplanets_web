import styled from 'styled-components'

// import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumnGrow()};
  color: ${theme('thread.articleDigest')};
  max-width: 60%;
`
export const InnerWrapper = styled.div``
