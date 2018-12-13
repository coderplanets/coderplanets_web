import styled from 'styled-components'

import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
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
  ${cs.flex()};
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
  ${cs.flex('align-end')};
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;
`
