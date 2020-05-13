//
import styled from 'styled-components'

// import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumnGrow()};
  margin-top: 10px;
  padding-left: 15px;
`

export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
`

export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: 3px;
`

export const Divider = styled.div`
  border-top: 1px solid;
  color: ${theme('thread.articleDigest')};
  width: 100%;
  opacity: 0.4;
  margin-top: 8px;
  margin-bottom: 8px;
`
