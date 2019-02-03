import styled from 'styled-components'

import { theme, cs } from 'utils'
import Img from 'Img'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.articleLink')};
  margin-left: 10px;
  opacity: 0.8;
`
export const LinkIcon = styled(Img)`
  fill: ${theme('thread.articleLink')};
  display: block;
  margin-right: 3px;
  width: 12px;
  height: 12px;
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
  ${cs.media.mobile`display: none`};
`
