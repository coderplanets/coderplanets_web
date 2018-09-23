import styled from 'styled-components'
import { Input } from 'antd'

// import Img from '../../Img'
import { theme } from '../../../utils'

const { TextArea } = Input

/* border-color: ${({ isError }) => (isError ? 'tomato' : theme('form.border'))}; */
export const Inputer = styled(Input)`
  border-left: ${({ error }) =>
    error === 'true' ? '3px solid !important' : ''};
  border-right: ${({ error }) =>
    error === 'true' ? '3px solid !important' : ''};
  border-left-color: ${({ error }) =>
    error === 'true' ? 'tomato !important' : ''};
  border-right-color: ${({ error }) =>
    error === 'true' ? 'tomato !important' : ''};
`
export const TextAreaer = styled(TextArea)`
  border-left: ${({ error }) =>
    error === 'true' ? '3px solid !important' : ''};
  border-right: ${({ error }) =>
    error === 'true' ? '3px solid !important' : ''};
  border-left-color: ${({ error }) =>
    error === 'true' ? 'tomato !important' : ''};
  border-right-color: ${({ error }) =>
    error === 'true' ? 'tomato !important' : ''};
`

export const FormItemWrapper = styled.div`
  display: flex;
  margin-bottom: ${({ bottom }) => bottom};
  width: 100%;
`
export const FormLable = styled.div`
  font-size: 0.9rem;
  color: ${({ error }) => (error ? 'tomato' : theme('form.label'))};
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
