import styled from 'styled-components'

// import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`
export const InputWrapper = styled.div`
  position: relative;
  ${cs.flex('align-center')};
  border-radius: 20px;
  padding: 10px 18px;
  background-color: ${theme('content.cardBg')};
  margin-bottom: 8px;
  opacity: 0.8;
  border: 1px solid #1e6184;
  &:hover {
    background-color: ${theme('content.cardBg')};
    opacity: 1;
    border: 1px solid #327faf;
  }

  transition: all 0.25s ease-in;

  ${cs.media.mobile`
    width: 70%;
    margin-left: 15%;
    padding: 8px;
  `};
`
export const InputMask = styled.div`
  ${cs.flex('align-both')};
  position: absolute;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  top: 0;
  left: 18px;
  width: 400px;
  height: 40px;
`
export const MaskNumer = styled.span`
  color: #327faf;
  margin-right: 4px;
`
export const InputBar = styled.input`
  text-align: center;
  caret-color: ${theme('banner.title')};
  flex-grow: 1;
  height: 100%;
  width: auto;
  min-width: 420px;
  outline: none;
  color: ${theme('banner.desc')};
  font-size: 1.1rem;
  max-height: none;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  transition: all 400ms ease;
`
