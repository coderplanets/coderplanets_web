import styled from 'styled-components'

import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  font-size: ${({ size }) => size};
  background: #eaf5f3;
  padding: 0 3px;
  border-radius: 5px;
  cursor: pointer;
`
// export const Title = styled.div``

export const IconWrapper = styled.span`
  ${cs.flex('align-center')};
  max-width: 0;
  ${Wrapper}:hover & {
    margin-left: 3px;
    max-width: calc(${({ size }) => size} + 3px);
  }
  transition: all 0.3s;
`

export const Icon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  display: block;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  max-width: 0;

  ${Wrapper}:hover & {
    max-width: ${({ size }) => size};
    transition: all 0.5s;
  }
`
