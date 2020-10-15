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
    error === 'true' ? theme('baseColor.error') : ''};
  border-right-color: ${({ error }) =>
    error === 'true' ? theme('baseColor.error') : ''};
`
// TODO:  ANTD-CHECK
export const TextAreaInput = styled(Input)`
  border-left: ${({ error }) =>
    error === 'true' ? '3px solid !important' : ''};
  border-right: ${({ error }) =>
    error === 'true' ? '3px solid !important' : ''};
  border-left-color: ${({ error }) =>
    error === 'true' ? theme('baseColor.error') : ''};
  border-right-color: ${({ error }) =>
    error === 'true' ? theme('baseColor.error') : ''};
`

export const FormItemWrapper = styled.div`
  ${css.flex()};
  margin-bottom: ${({ bottom }) => bottom};
  width: 100%;
`
export const FormLabel = styled.div`
  font-size: 0.9rem;
  color: ${({ error }) =>
    error ? theme('baseColor.error') : theme('form.label')};
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
