import styled from 'styled-components'

import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex()};
`
export const Selector = styled.div`
  flex-grow: 1;
`
export const Issue = styled.div`
  ${cs.flex('align-center')};
  margin-right: 4px;
`
export const GithubIcon = styled(Img)`
  fill: ${theme('baseColor.error')};
  width: 15px;
  height: 15px;
  display: block;
  margin-right: 5px;
  opacity: 0.5;
  ${Wrapper}:hover & {
    opacity: 1;
  }
`
export const IssueLinker = styled.a`
  color: ${theme('baseColor.error')};
  opacity: 0.5;
  &:hover {
    cursor: pointer;
    opacity: 1;
    text-decoration: underline;
    color: ${theme('baseColor.error')};
  }
`

export const Divider = styled.div`
  opacity: 0.5;
  color: ${theme('baseColor.error')};
  margin-right: 4px;
  margin-left: 4px;
`
