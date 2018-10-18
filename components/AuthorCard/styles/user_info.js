import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
`
export const Avatar = styled(Img)`
  width: 40px;
  height: 40px;
  border-radius: 3px;
  display: block;
`
export const Brief = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`
export const Nickname = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1rem;
`
export const Bio = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
`
