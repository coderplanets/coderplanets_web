import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
`
export const EditWrapper = styled.div`
  width: 100%;
  margin-left: 3px;
  padding-right: 5px;
  margin-top: 20px;
`
export const FormItemWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`
export const FormLable = styled.div`
  font-size: 0.9rem;
  color: ${theme('form.label')};
  margin-right: 15px;
  margin-top: 5px;
  width: auto;
  text-align: right;
`
export const FormInput = styled.div`
  flex-grow: 1;
`
export const RadiosWrapper = styled.div`
  margin-top: 6px;
`
export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`
