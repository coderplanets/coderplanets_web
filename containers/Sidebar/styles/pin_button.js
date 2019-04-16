import styled from 'styled-components'

import Img from 'components/Img'
import { theme } from 'utils'

import { Wrapper as IndexWrapper } from './index'

export const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`
export const PinIcon = styled(Img)`
  fill: ${({ pin }) => (pin ? theme('sidebar.pinActive') : 'grey')};
  margin-right: 10px;
  width: 23px;
  height: 23px;
  visibility: ${({ pin }) => (pin ? 'visible' : 'hidden')};
  opacity: ${({ pin }) => (pin ? 1 : 0)};
  transition: visibility 0s, opacity 0.3s linear;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }
  ${IndexWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`
