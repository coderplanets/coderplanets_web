import styled from 'styled-components'

// import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumnGrow()};
  color: ${theme('thread.articleDigest')};
  max-width: 60%;
`
export const InnerWrapper = styled.div``
