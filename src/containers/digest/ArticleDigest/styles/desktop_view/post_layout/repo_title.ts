import styled from 'styled-components'

// import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  font-size: 1.3rem;
`
export const LanguageDot = styled.div`
  ${css.circle(15)};
  margin-right: 8px;
  background-color: ${({ color }) => color};
`
export const LanguagePopover = styled.div`
  color: ${theme('thread.articleTitle')};
  padding: 5px 10px;
  font-size: 1rem;
  font-weight: bold;
`
export const TitleLink = styled.a`
  color: ${theme('banner.title')};
  transition: color 0.2s;
  &:hover {
    color: ${theme('banner.title')};
    text-decoration: underline;
    cursor: pointer;
  }
`
export const Slash = styled.div`
  color: ${theme('banner.title')};
  margin-left: 4px;
  margin-right: 4px;
`
