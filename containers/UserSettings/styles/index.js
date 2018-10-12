import styled from 'styled-components'

import { theme } from '../../../utils'

export const Wrapper = styled.div`
  padding-left: 10px;
  margin-bottom: 30px;
`
export const RadiosWrapper = styled.div`
  margin-bottom: 40px;
  margin-left: 3px;
`

export const LabelDescWrapper = styled.div`
  display: flex;
  color: ${theme('banner.desc')};
  font-size: 0.8rem;
  margin-bottom: 18px;
  margin-left: 3px;
`

export const LabelDescLink = styled.div`
  margin-left: 3px;
  margin-right: 3px;
  text-decoration: none;
  font-weight: bolder;
  color: ${theme('banner.title')};
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
    color: ${theme('banner.title')};
    cursor: pointer;
  }
`
