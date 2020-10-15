import styled from 'styled-components'

// import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
`
export const DescriptionWrapper = styled.div`
  margin-top: 3px;
  margin-bottom: 5px;
  width: 100%;
  color: ${theme('banner.desc')};
`
export const HomepageLink = styled.a`
  color: ${theme('markdown.link')};
  transition: color 0.3s;
  margin-left: 12px;
  &:hover {
    color: ${theme('markdown.link')};
    text-decoration: underline;
    cursor: pointer;
  }
`
