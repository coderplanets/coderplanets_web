import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Avatar = styled(Img)`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  display: block;
  margin-right: 4px;
`

export const PopInfo = styled.div`
  padding: 5px 10px;
  color: ${theme('thread.articleTitle')};
`
