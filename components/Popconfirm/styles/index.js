import styled from 'styled-components'

import { theme, animate, cs } from 'utils'
import Img from 'Img'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  padding: 10px;
`
export const Header = styled.div`
  ${cs.flex()};
`
export const Footer = styled.div`
  ${cs.flex('justify-end')};
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
  ${cs.flex('align-center')};

  margin-left: 5px;
  margin-right: 8px;
  padding-left: 4px;
  padding-right: 4px;
  line-height: 1;
  border-radius: 5px;
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
    font-weight: bold;
    border: 1px solid;
    border-color: ${theme('baseColor.error')};
  }
  &:active {
    animation: ${animate.pulseRule};
  }
`
export const CutIcon = styled(Img)`
  fill: ${theme('baseColor.error')};
  width: 18px;
  height: 18px;
  margin-right: 1px;
  margin-top: 1px;
`
export const ConfirmText = styled.div`
  color: ${theme('baseColor.error')};
`
