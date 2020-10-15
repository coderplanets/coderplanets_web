import styled from 'styled-components'

// import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumnGrow()};
  color: ${theme('thread.articleDigest')};
  max-width: 60%;
`
export const InnerWrapper = styled.div``
