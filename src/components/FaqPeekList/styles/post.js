import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  min-width: 50%;
  margin-bottom: 8px;
  padding-right: 25px;

  &:nth-child(even) {
    padding-right: 0;
    padding-left: 15px;
  }
`
export const Dot = styled.div`
  background: ${theme('banner.desc')};
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin-right: 5px;
`
export const Title = styled.div`
  ${css.flex('align-center')};
  color: ${theme('banner.desc')};

  ${Wrapper}:hover & {
    color: ${theme('banner.title')};
    cursor: pointer;
  }
  transition: all 0.25s;
`
export const Reaction = styled.div`
  ${css.flex('align-center')};
  opacity: 0.8;

  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: all 0.25s;
`
export const Icon = styled(Img)`
  fill: ${theme('banner.desc')};
  ${css.size(11)};
  margin-right: 3px;
  margin-top: -1px;
`
export const Count = styled.div`
  color: ${theme('banner.desc')};
  font-size: 12px;
`
