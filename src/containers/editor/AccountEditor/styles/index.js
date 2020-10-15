import styled from 'styled-components'

import Img from '@/Img'
import { animate, theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};

  padding-top: 20px;
  padding-bottom: 50px;
  height: auto;
  min-height: 80vh;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  background: ${theme('content.cardBg')};
  border-radius: 5px;
  position: relative;
  animation: ${animate.fadeInRight} 0.2s linear;
`
export const AvatarPic = styled(Img)`
  ${css.circle('70px')};
  margin-bottom: 30px;
  display: block;
`
export const BackIcon = styled(Img)`
  fill: ${theme('font')};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 13px;
  left: 18px;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
  transition: opacity 0.2s;
`
export const FormsWrapper = styled.div`
  ${css.flexColumn('align-center')};
`
export const Divider = styled.div`
  border-top: 1px solid;
  border-top-color: ${theme('drawer.divider')};
  margin-top: 15px;
  width: 75%;
  margin-bottom: 20px;
`
export const ActionBtns = styled.div``
