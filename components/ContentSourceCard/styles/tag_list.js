import styled from 'styled-components'

import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
  margin-left: 2px;
`
export const TagDot = styled.div`
  width: 10px;
  height: 10px;
  background: tomato;
  border-radius: 50%;
  margin-right: 5px;
`
export const TagTitle = styled.div`
  margin-top: -5px;
`

export const NomoreDesc = styled.div`
  color: ${theme('banner.desc')};
  font-style: italic;
`
