import styled from 'styled-components'
// import Img from '../../Img'
import { theme } from '../../../utils'

export const FormItemWrapper = styled.div`
  display: flex;
  margin-bottom: 25px;
  width: 100%;
`
export const FormLable = styled.div`
  font-size: 0.9rem;
  color: ${theme('form.label')};
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
