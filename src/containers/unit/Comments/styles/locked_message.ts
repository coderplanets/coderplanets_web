import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 16px;
  padding: 15px;
  padding-left: 30px;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  background: ${theme('drawer.articleBg')};
`

export const LockIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(20)};
  margin-right: 10px;
  margin-top: -4px;
`

export const Message = styled.div`
  color: ${theme('thread.articleTitle')};
`
