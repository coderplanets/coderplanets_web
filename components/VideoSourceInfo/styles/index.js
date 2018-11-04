import styled from 'styled-components'

import Img from '../../Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.articleLink')};
  margin-left: 10px;
  opacity: 0.8;
  line-height: 1;
  height: 1.6rem;
  font-size: 0.8rem;
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
