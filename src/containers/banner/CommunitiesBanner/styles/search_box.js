import styled from 'styled-components'

// import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`
export const InputWrapper = styled.div`
  ${cs.flex('align-center')};
  border-radius: 20px;
  padding: 10px 18px;
  background-color: ${theme('content.cardBg')};
  margin-bottom: 8px;
  opacity: 0.8;
  &:hover {
    background-color: ${theme('content.cardBg')};
    opacity: 1;
  }
  transition: all 0.2s ease-in;

  ${cs.media.mobile`
    width: 70%;
    margin-left: 15%;
    padding: 8px;
  `};
`
export const InputBar = styled.input`
  text-align: center;
  caret-color: ${theme('banner.title')};
  flex-grow: 1;
  font-family: '.SFNSText-Light', 'SF UI Text', 'Helvetica Neue', 'Arial',
    'Lucida Grande', 'Segoe UI', Noto Sans, sans-serif;
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
  ::placeholder {
    color: ${theme('banner.desc')};
    opacity: 0.6;
  }
`
