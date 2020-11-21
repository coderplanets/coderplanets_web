import styled from 'styled-components'

import { theme, css } from '@/utils'
import Input from '@/components/Input'

// import Img from '@/Img'

export const Inputer = styled(Input)`
  border-left: ${({ error }) =>
    error === 'true' ? '3px solid !important' : ''};
  border-right: ${({ error }) =>
    error === 'true' ? '3px solid !important' : ''};
  border-left-color: ${({ error }) =>
    error === 'true' ? theme('baseColor.red') : ''};
  border-right-color: ${({ error }) =>
    error === 'true' ? theme('baseColor.red') : ''};
`
// TODO:  ANTD-CHECK
export const TextAreaInput = styled(Input)`
  border-left: ${({ error }) =>
    error === 'true' ? '3px solid !important' : ''};
  border-right: ${({ error }) =>
    error === 'true' ? '3px solid !important' : ''};
  border-left-color: ${({ error }) =>
    error === 'true' ? theme('baseColor.red') : ''};
  border-right-color: ${({ error }) =>
    error === 'true' ? theme('baseColor.red') : ''};
`

export const FormItemWrapper = styled.div`
  ${css.flex()};
  margin-bottom: ${({ bottom }) => `${bottom}px`};
  width: 100%;
`
export const FormLabel = styled.div`
  font-size: 13px;
  color: ${({ error }) =>
    error ? theme('baseColor.red') : theme('form.label')};
  margin-right: 10px;
  margin-top: 5px;
  width: auto;
  text-align: right;
  min-width: 60px;
`
export const FormInput = styled.div`
  flex-grow: 1;
  max-width: 600px;
`
export const NodeWrapper = styled.div`
  margin-top: 4px;
`
