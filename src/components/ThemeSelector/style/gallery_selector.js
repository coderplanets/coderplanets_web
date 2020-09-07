import styled from 'styled-components'

import { theme, cs } from '@/utils'

import { Dot } from './index'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  margin-bottom: 10%;
`
export const ThemeDot = styled(Dot)``

export const IntroBox = styled.div`
  ${cs.flex('justify-between')};
  background: ${({ active }) => (active ? theme('banner.bg') : 'transparent')};
  border: 1px solid;
  border: ${({ active }) => (active ? '2px solid' : '1px dashed')};
  border-color: ${theme('banner.desc')};
  margin-right: 15px;
  margin-bottom: 20px;
  min-height: 100px;
  width: ${({ active }) => (active ? '88%' : '78%')};
  padding: 10px;
  border-radius: 5px;
  &:hover {
    border: 2px solid;
    border-color: ${theme('banner.desc')};
  }
  transition: border 0.3s;

  ${cs.media.mobile`
    width: 100%; 
    margin-left: 20px;
    margin-right: 20px;
  `};
`
export const IntroDesc = styled.div`
  ${cs.flexColumn()};
  width: 68%;
  position: relative;
`
export const ThemeTitle = styled.div`
  /* color: ${theme('banner.title')}; */
  color: #7B8F90;
  font-size: ${({ active }) => (active ? '20px' : '18px')};
  font-weight: ${({ active }) => (active ? 'bolder' : '')};
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.8)};
  margin-bottom: ${({ active }) => (active ? '15px' : '5px')};
`
export const ThemeDesc = styled.div`
  font-size: ${({ active }) => (active ? '15px' : '14px')};
  /* color: ${theme('banner.desc')}; */
  color: #7B8F90;
  opacity: ${({ active }) => (active ? '1' : '0.6')};
  cursor: pointer;
`
