import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.nav`
  ${css.flexColumn('align-both')};
  margin-bottom: 22px;
`
export const Avatar = styled(Img)`
  ${css.circle('36px')};
  display: block;
`
export const Name = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 8px;
`
