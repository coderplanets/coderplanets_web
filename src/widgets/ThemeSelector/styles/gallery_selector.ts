import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

import { Dot } from './index'

export const Wrapper = styled.div`
  ${css.flex('align-both')};
  flex-wrap: wrap;
`
export const ThemeDot = styled(Dot)`
  ${css.circle(20)};
  margin-top: 7px;
  margin-right: 0;

  &:after {
    content: '';
  }
`
type TIntroBox = TActive & { index: number }
export const IntroBox = styled.div<TIntroBox>`
  ${css.flex('justify-between')};
  margin-right: ${({ index }) => (index % 2 === 0 ? '5%' : 0)};
  background: ${({ active }) => (active ? theme('banner.bg') : 'transparent')};
  border: 1px solid;
  border-color: #0f4858;
  margin-bottom: 20px;
  min-height: 100px;
  width: 40%;
  height: 180px;
  padding: 10px;
  border-radius: 5px;
  padding-top: 5px;

  &:hover {
    border: 1px solid;
    border-color: ${({ active }) =>
      active ? '#0f4858' : theme('banner.desc')};
  }
  transition: border 0.3s;

  ${css.media.mobile`
    width: 100%; 
    margin-left: 20px;
    margin-right: 20px;
  `};
`
export const IntroDesc = styled.div`
  ${css.flexColumn('justify-between')};
  width: calc(100% - 30px);
  position: relative;
  padding-top: 5px;
  padding-bottom: 20px;
`
export const ThemeTitle = styled.div<TActive>`
  /* color: ${theme('banner.title')}; */
  color: #7b8f90;
  font-size: 17px;
  font-weight: ${({ active }) => (active ? 'bolder' : '')};
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.8)};
  margin-bottom: ${({ active }) => (active ? '15px' : '5px')};

  ${IntroBox}:hover & {
    font-weight: bold;
  }
`
export const ThemeDesc = styled.div<TActive>`
  ${css.lineClamp(3)}
  font-size: ${({ active }) => (active ? '15px' : '14px')};
  /* color: ${theme('banner.desc')}; */
  color: #7b8f90;
  opacity: ${({ active }) => (active ? '1' : '0.6')};
  cursor: pointer;
`
