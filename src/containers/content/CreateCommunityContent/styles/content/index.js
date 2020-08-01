import styled from 'styled-components'

import { cs, theme } from '@/utils'
// import Img from '@/Img'

// import Img from '@/components/Img'

export const Wrapper = styled.div`
  ${cs.flex('justify-center')};
`
export const ContentWrapper = styled.div`
  ${cs.flex('align-both')};
  transition: all 0.25s;
  /* TODO:  tmp */
  color: ${theme('thread.articleDigest')};
`
