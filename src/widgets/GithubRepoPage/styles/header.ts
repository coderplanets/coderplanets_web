import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('justify-between')};
  width: 100%;
`
export const TitlesWrapper = styled.div`
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
export const CountsWrapper = styled.div`
  ${css.flex()};
`
export const CountItem = styled.a`
  ${css.flex('align-center')};

  color: ${theme('banner.title')};
  transition: color 0.2s;
  &:hover {
    color: ${theme('banner.title')};
    text-decoration: underline;
    cursor: pointer;
  }
`
export const CountIcon = styled(Img)`
  fill: ${theme('banner.title')};
  ${css.size(15)};
  margin-right: 4px;
  margin-top: -3px;
`
export const StarIcon = styled(CountIcon)`
  margin-top: -4px;
`
export const CountDivider = styled(CountIcon)`
  margin-left: 4px;
  margin-right: 4px;
`
export const CountText = styled.div`
  font-size: 0.9rem;
  color: ${theme('banner.title')};
  margin-right: 2px;
`
