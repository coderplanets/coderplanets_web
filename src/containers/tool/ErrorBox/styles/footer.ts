import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
`
export const Selector = styled.div`
  flex-grow: 1;
`
export const Issue = styled.div`
  ${css.flex('align-center')};
  margin-right: 4px;
`
export const GithubIcon = styled(Img)`
  fill: ${theme('baseColor.red')};
  ${css.size(15)};
  margin-right: 5px;
  opacity: 0.5;
  ${Wrapper}:hover & {
    opacity: 1;
  }
`
export const IssueLinker = styled.a`
  color: ${theme('baseColor.red')};
  opacity: 0.5;
  &:hover {
    cursor: pointer;
    opacity: 1;
    text-decoration: underline;
    color: ${theme('baseColor.red')};
  }
`

export const Divider = styled.div`
  opacity: 0.5;
  color: ${theme('baseColor.red')};
  margin-right: 4px;
  margin-left: 4px;
`
