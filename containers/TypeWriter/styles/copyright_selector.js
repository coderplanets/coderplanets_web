import styled from 'styled-components'

import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  padding: 5px 8px;
`

export const Selector = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
    color: ${theme('editor.title')};
  }
`
export const CheckIcon = styled(Img)`
  fill: ${theme('editor.content')};
  width: 18px;
  height: 18px;
  margin-top: 2px;
  margin-right: 3px;
  visibility: ${({ active }) => (active ? 'visiable' : 'hidden')};
`
export const CheckText = styled.div`
  color: ${theme('editor.content')};
`

export const CopyRightText = styled.div`
  font-size: 1.1em;
`

export const ReprintWrapper = styled.div`
  color: ${theme('editor.content')};
  display: flex;
  cursor: pointer;
`

export const ReprintIcon = styled(Img)`
  fill: ${theme('editor.content')};
  width: 14px;
  height: 14px;
  margin-top: 3px;
  margin-right: 5px;
`

export const MoreIcon = styled(Img)`
  width: 14px;
  height: 14px;
  margin-top: 3px;
  fill: ${theme('editor.placeholder')};
  &:hover {
    cursor: pointer;
  }
`
