import styled from 'styled-components'
// import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
  height: auto;
  min-height: 80vh;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  background: ${theme('content.cardBg')};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
export const FormWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: -10%;
`
export const Letter = styled.span`
  color: ${({ color }) => color};
  margin-right: 5px;
  opacity: 0.8;
`
export const SearchTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`
export const InputWrapper = styled.div`
  width: 85%;
  margin-left: 15%;
`
export const Footer = styled.div`
  color: ${theme('banner.desc')};
  font-size: 0.9rem;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`
