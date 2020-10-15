import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

import { Dot } from './index'

export const Wrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
`

export const ThemeDot = styled(Dot)``

/* background: ${({ active }) => (active ? theme('banner.bg') : '')}; */
export const IntroBox = styled.div`
  ${css.flex()};

  border: 1px solid;
  border: ${({ active }) => (active ? '2px solid' : '1px dashed')};
  border-color: ${theme('banner.desc')};
  margin-right: 15px;
  margin-bottom: 18px;
  height: 130px;
  width: 210px;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-color: ${theme('banner.desc')};
  }
  transition: border 0.3s;

  ${css.media.mobile`width: 160px; margin-right: 10px;`};
`

export const IntroDesc = styled.div`
  ${css.flexColumn()};
  width: 80%;
  position: relative;
`

export const ThemeTitle = styled.div`
  color: ${theme('banner.title')};
  font-size: 1.1rem;
  font-weight: ${({ active }) => (active ? 'bolder' : '')};
  cursor: pointer;
  margin-top: -2px;
  opacity: ${({ active }) => (active ? 1 : 0.8)};
`

export const ThemeDesc = styled.div`
  font-size: 0.8rem;
  color: ${theme('banner.desc')};
  cursor: pointer;
`

export const AuthorInfo = styled.div`
  ${css.flex()};

  font-size: 0.8rem;
  color: ${theme('banner.desc')};
  position: absolute;
  bottom: -5px;
  left: 0;
`

export const AuthorIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 13px;
  height: 13px;
  margin-right: 5px;
  margin-top: 3px;
`

export const AuthorName = styled.a`
  color: ${theme('banner.desc')};
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
    color: ${theme('banner.title')};
  }
`
