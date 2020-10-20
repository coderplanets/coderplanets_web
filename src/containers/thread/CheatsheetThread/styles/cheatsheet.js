import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
// width: 550px;
export const CardWrapper = styled.div`
  width: 450px;
  height: auto;
  background: ${theme('code.bg')};
  margin: 10px;
  margin-right: 20px;
  overflow-y: scroll;

  ${css.media.mobile`
    width: 95%;
  `};
`
export const ErrorWrapper = styled.div`
  ${css.flexColumn()};
  padding: 20px 40px;
  border: 1px solid;
  border-radius: 5px;
  border-top: 3px solid;
  border-color: ${theme('baseColor.red')};
  min-height: 100px;
  margin-bottom: 30px;
  background: ${theme('baseColor.redBg')};
`
export const ErrorTitle = styled.div`
  font-size: 1.2rem;
  color: ${theme('baseColor.red')};
  margin-bottom: 20px;
`
export const ErrorLink = styled.a`
  transition: color 0.3s;
  color: ${theme('baseColor.red')};
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    color: ${theme('baseColor.red')};
    text-decoration: underline;
  }
`
