import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import FormInput from '@/widgets/Input'
import DeleteSVG from '@/icons/Delete'

export const Wrapper = styled.div`
  width: 100%;
`

export const EachWrapper = styled.div`
  position: relative;
  ${css.flex('align-center')};
  width: 100%;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 12px;
`
export const SelectWrapper = styled.div`
  width: 120px;
`
export const InputWrapper = styled.div`
  flex-grow: 1;
  margin-left: 10px;
`
export const Input = styled(FormInput)`
  text-align: left;
  padding: 5px 5px;
  padding-left: 12px;
  height: 38px;
  width: 100%;
  font-size: 15px;
`
export const DeleteIcon = styled(DeleteSVG)`
  position: absolute;
  right: 10px;
  top: 10px;
  fill: ${theme('baseColor.red')};
  ${css.size(18)};
  opacity: 0;

  ${EachWrapper}:hover & {
    opacity: 0.8;
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  transition: opacity 0.2s;
`
