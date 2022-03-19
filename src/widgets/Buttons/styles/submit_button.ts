import styled from 'styled-components'

import css, { theme, animate } from '@/utils/css'
import CheckedSVG from '@/icons/Checked'

export const Wrapper = styled.div``

export const PublishFooter = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  padding-left: 26px;
  padding-right: 35px;
`
export const DonwWrapper = styled.div`
  ${css.flex('align-center')};
  animation: ${animate.zoomIn} 0.3s linear;
`
export const DoneIcon = styled(CheckedSVG)`
  ${css.size(16)};
  fill: ${theme('baseColor.green')};
  margin-right: 6px;
`
export const DoneHint = styled.div`
  color: ${theme('baseColor.green')};
  font-size: 14px;
`
