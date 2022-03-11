import styled from 'styled-components'

import { TSpace } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div<TSpace>`
  width: 280px;
  min-height: 180px;
  border-radius: 5px;
  padding: 10px;
  margin-left: ${({ left }) => `${left}px`};
  margin-right: ${({ right }) => `${right}px`};
  margin-bottom: ${({ bottom }) => `${bottom}px`};
  /* border-bottom: 1px solid #0f4556; */
`
export const Header = styled.div``

export const Title = styled.span`
  color: ${theme('banner.title')};
  font-size: 14px;
  font-weight: bold;
  /* padding-bottom: 5px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('banner.desc')}; */
`
export const ListWrapper = styled.div`
  ${css.flexColumn()};
  margin-top: 15px;
`
export const MoreWrapper = styled.div`
  opacity: 0.5;
  margin-top: 2px;

  &:hover {
    opacity: 1;
  }

  transition: opacity 0.25s;
`
