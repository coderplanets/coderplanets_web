import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
`

export const Item = styled.div``

export const Icon = styled(Img)`
  width: 16px;
  height: 16px;
  fill: ${theme('thread.articleDigest')};
  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
  display: block;
  margin-right: 8px;
`

export const PopInfo = styled.div`
  padding: 5px 10px;
`
