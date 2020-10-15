import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div``

export const HeaderWrapper = styled.div`
  ${css.flex()};
  margin-bottom: 5px;
`
export const Title = styled.div`
  font-size: 1em;
  color: ${theme('drawer.title')};
  margin-bottom: 10px;
  flex-grow: 1;
`
export const HelpText = styled.div`
  color: ${theme('drawer.helper')};
  ${HeaderWrapper}:hover & {
    color: ${theme('drawer.helperHover')};
    cursor: pointer;
  }
  transition: color 0.2s;
`
export const IconList = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
`
export const PlanetsIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 26px;
  height: 26px;
  margin-right: 8px;
  margin-bottom: 3px;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
  transition: opacity 0.2s;
`
