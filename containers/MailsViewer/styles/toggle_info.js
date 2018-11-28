import styled from 'styled-components'

// import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Info = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const Number = styled.span`
  color: ${theme('banner.title')};
  margin-left: 4px;
  margin-right: 4px;
  font-weight: bold;
`
