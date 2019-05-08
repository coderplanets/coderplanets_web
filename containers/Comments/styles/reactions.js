import styled from 'styled-components'

import Img from '@components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flexGrow()};
  margin-left: -4px;
`
export const VisiableAction = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('comment.action')};
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`

export const ActionNumber = styled.div`
  font-size: 1.2em;
  color: ${theme('comment.action')};
`
export const UpIcon = styled(Img)`
  fill: ${({ viewerDid }) =>
    viewerDid ? theme('comment.didIcon') : theme('comment.icon')};
  margin-right: 3px;
  width: 20px;
  height: 20px;
  display: block;
  ${cs.smokey};
`

export const DownIcon = styled(UpIcon)`
  margin-right: 5px;
  width: 16px;
  height: 16px;
  transform: rotate(180deg);
`
