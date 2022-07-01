import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  padding-right: 5px;
`
export const User = styled.div`
  ${css.flex()};
  margin-bottom: 25px;
`
export const Intro = styled.div`
  width: 100%;
`
export const Title = styled.div`
  ${css.flex('align-center')};
  font-weight: 600;
`
export const Name = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
`
export const Login = styled.div`
  color: ${theme('lightText')};
  font-size: 14px;
  margin-left: 10px;
`
export const Bio = styled.div`
  color: ${theme('lightText')};
  font-size: 14px;
  width: 75%;
`
