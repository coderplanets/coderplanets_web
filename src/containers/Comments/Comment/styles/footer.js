import styled from 'styled-components'

// import Img from '@components/Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  margin-top: 5px;
`

export const PublishDateWrapper = styled.div`
  color: ${theme('comment.action')};
  font-size: 14px;
`
