import styled from 'styled-components'

import Img from '@Img'
import { theme } from '@utils'

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  margin-bottom: 5px;
  flex-grow: 1;
`
export const TextWrapper = styled(Wrapper)`
  padding-top: 3px;
  color: ${theme('thread.articleDigest')};
  border-bottom: 1px solid;
  border-bottom-color: #1b556b;
`
export const Cover = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`
