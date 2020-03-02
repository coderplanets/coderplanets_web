import styled from 'styled-components'

// import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  display: flex;
  color: ${theme('banner.desc')};
  font-size: 0.8rem;
  margin-bottom: 18px;
  margin-left: 3px;
`

export const MailWrapper = styled.a`
  color: ${theme('banner.title')};
  margin-left: 3px;

  &:hover {
    text-decoration: underline;
    font-weight: bold;
    color: ${theme('banner.title')};
  }
`
