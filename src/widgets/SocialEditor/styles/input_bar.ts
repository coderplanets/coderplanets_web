import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import DeleteSVG from '@/icons/DeleteSolid'
import Input from '@/widgets/Input'

export { Icon } from './index'
// import { theme } from '@/utils/themes'

export const Wrapper = styled.div`
  width: 300px;
  ${css.flex('align-center')};
  position: relative;
`
export const Inputer = styled(Input)`
  width: 265px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`
export const DeleteWrapper = styled.div`
  ${css.circle(20)};
  ${css.flex('align-both')};
  position: absolute;
  top: 7px;
  right: -8px;
  background: white;
  z-index: 2;
`
export const DeleteIcon = styled(DeleteSVG)`
  ${css.size(20)};
  fill: ${theme('thread.articleDigest')};
  opacity: 0.5;

  ${DeleteWrapper}:hover & {
    fill: ${theme('baseColor.red')};
    opacity: 1;
    cursor: pointer;
  }

  &:before {
    content: '';
    position: absolute;
    ${css.size(20)};
  }

  transition: all 0.2s;
`

export const IconWrapper = styled.div`
  border: 1px solid;
  border-color: ${theme('editor.border')};
  background: ${theme('hoverBg')};
  ${css.flex('align-both')};
  width: 38px;
  height: 34px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: none;
`
export const Hint = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  margin-top: 15px;
  margin-left: 2px;
`
export const PlatformWrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
  gap: 12px 15px;
  margin-top: 10px;
  background: ${theme('hoverBg')};
  padding: 12px 10px;
  border-radius: 5px;
  width: 300px;
`
