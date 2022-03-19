import styled from 'styled-components'

import type { TSpace } from '@/spec'
import css, { theme } from '@/utils/css'
import Input from '@/widgets/Input'

// import Img from '@/Img'

export const Inputer = styled(Input)<{ error: string }>`
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
export const TextAreaInput = styled(Input)<{ error: string }>`
  border-left: ${({ error }) =>
    error === 'true' ? '3px solid !important' : ''};
  border-right: ${({ error }) =>
    error === 'true' ? '3px solid !important' : ''};
  border-left-color: ${({ error }) =>
    error === 'true' ? theme('baseColor.red') : ''};
  border-right-color: ${({ error }) =>
    error === 'true' ? theme('baseColor.red') : ''};
  border: 1px solid tomato;
`

export const FormItemWrapper = styled.div<TSpace>`
  ${css.flex()};
  margin-bottom: ${({ bottom }) => `${bottom}px`};
  width: 100%;
`
export const FormLabel = styled.div<{ error: boolean }>`
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
