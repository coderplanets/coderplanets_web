import styled from 'styled-components'

import Img from '../../Img'
import { theme, animate } from '../../../utils'

export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`
export const Header = styled.div`
  display: flex;
`
export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const WarningIcon = styled(Img)`
  fill: #ffbd45;
  width: 18px;
  height: 18px;
  margin-right: 4px;
`
export const Desc = styled.div`
  color: ${theme('form.label')};
  margin-bottom: 10px;
`
export const CancleBtn = styled.div`
  color: ${theme('form.label')};
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
  }
`
export const DeleteBtn = styled.div`
  display: flex;
  margin-left: 5px;
  margin-right: 8px;
  padding-left: 4px;
  padding-right: 4px;
  line-height: 1;
  align-items: center;
  border-radius: 5px;
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
    font-weight: bold;
    border: 1px solid tomato;
  }
  &:active {
    animation: ${animate.pulse} 0.3s linear;
  }
`
export const CutIcon = styled(Img)`
  fill: tomato;
  width: 18px;
  height: 18px;
  margin-right: 1px;
  margin-top: 1px;
`
export const ConfirmText = styled.div`
  color: tomato;
`
