import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.nav`
  ${css.flex('justify-center')};
`
export const Avatar = styled(Img)`
  ${css.circle('20px')};
  display: block;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  margin-left: 10px;
`
