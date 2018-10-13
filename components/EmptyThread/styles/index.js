import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10%;
  margin-bottom: 30px;
`

export const Icon404 = styled(Img)`
  width: 300px;
  height: 300px;
  fill: #b9c8c8;
`

export const Icon = styled.div``
export const Text = styled.div`
  text-align: center;
`
export const Title = styled.div`
  color: #b8c8c8;
  border-bottom: 1px solid #e2e8e8;
  padding-bottom: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 1.4rem;
`

export const DescWrapper = styled.div`
  color: #b8c8c8;
  margin-top: 0.6rem;
  font-size: 0.9rem;
`
const Link = styled.a`
  text-decoration: none;
  font-weight: bolder;
  color: ${theme('header.fg')};
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
    color: tomato;
  }
`
export const IssueLink = styled(Link)`
  margin-left: 3px;
`
