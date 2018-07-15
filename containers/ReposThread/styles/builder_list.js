import styled from 'styled-components'

import { Img } from '../../../components'
// import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
`
export const Builder = styled.div``

export const Avatar = styled(Img)`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  margin-left: 6px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`
