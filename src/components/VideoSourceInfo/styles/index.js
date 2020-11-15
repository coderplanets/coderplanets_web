import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleLink')};
  margin-left: 10px;
  opacity: 0.8;
`
export const LinkIcon = styled(Img)`
  fill: ${theme('thread.articleLink')};
  display: block;
  margin-right: 3px;
  ${css.size(12)};
  display: block;
`
export const LogoIcon = styled(Img)`
  fill: ${({ color }) => color};
  width: 15px;
  height: 15px;
  margin-right: 4px;
  margin-left: 2px;
  display: block;
`

export const Text = styled.div`
  ${css.media.mobile`display: none`};
`
