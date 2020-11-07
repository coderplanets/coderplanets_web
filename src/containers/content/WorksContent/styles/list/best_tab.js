import styled from 'styled-components'

import Img from '@/Img'
import { css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  width: 200px;
  margin-top: 5px;
  margin-left: 16px;
`
export const ItemWrapper = styled.div`
  ${css.flex('align-center')};
  cursor: pointer;
`
export const Icon = styled(Img)`
  fill: #1c7fad;
  display: ${({ active }) => (active ? 'block' : 'none')};
  width: 14px;
  height: 14px;
`
export const Text = styled.div`
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  color: #1c7fad;
  font-size: 14px;
  margin-left: 4px;
  margin-right: 14px;

  ${ItemWrapper}:hover & {
    font-weight: bold;
  }
`
