import styled from 'styled-components'

import { theme, cs } from 'utils'
import Img from 'Img'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  width: 100%;
  height: 100%;
  margin-top: 10%;
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
  border-top: 1px solid #e2e8e8;
  margin-top: 20px;
  padding-top: 20px;
  font-size: 1.5rem;
`

export const DescWrapper = styled.div`
  color: #b8c8c8;
  margin-top: 0.6rem;
  font-size: 1rem;
`
export const Desc = styled.div`
  color: #b8c8c8;
`
const Link = styled.a`
  text-decoration: none;
  font-weight: bolder;
  color: ${theme('header.fg')};
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
    color: ${theme('baseColor.error')};
  }
`
export const IssueLink = styled(Link)`
  margin-left: 3px;
`
