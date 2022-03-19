import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  padding: 8px 30px;
  height: 70px;
  border-top: 1px solid;
  border-top-color: #003b49;
`
export const Note = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  width: 60%;
`
export const WelcomeWrapper = styled.div`
  ${css.flexColumn('align-end')};
`
export const Welcome = styled.div`
  color: ${theme('baseColor.green')};
  font-size: 16px;
  font-weight: bold;
`
export const WelcomeDesc = styled.div`
  color: ${theme('baseColor.green')};
  font-size: 12px;
  margin-top: 2px;
  opacity: 0.8;
`
