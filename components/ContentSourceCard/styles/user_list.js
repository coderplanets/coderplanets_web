import styled from 'styled-components'

import Img from '../../Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Avatar = styled(Img)`
  ${cs.circle('20px')};
  display: block;
  margin-right: 5px;
`
export const PopInfo = styled.div`
  padding: 5px 10px;
  color: ${theme('thread.articleTitle')};
`
