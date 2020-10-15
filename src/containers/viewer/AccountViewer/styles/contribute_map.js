import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div``

export const TitleWrapper = styled.div`
  ${css.flex()};
`

export const HelpText = styled.div`
  color: ${theme('drawer.helper')};
  margin-top: 2px;
  &:hover {
    color: ${theme('drawer.helperHover')};
    cursor: pointer;
  }
  ${TitleWrapper}:hover & {
    color: ${theme('drawer.helperHover')};
  }
  transition: color 0.2s;
`
export const Title = styled.div`
  font-size: 1em;
  color: ${theme('drawer.title')};
  margin-bottom: 7px;
  flex-grow: 1;
`

export const DotWrapper = styled.div`
  ${css.flex('justify-end')};
  margin-top: 4px;
`
export const DotText = styled.div`
  font-size: 0.9em;
  color: ${theme('drawer.helper')};
  ${DotWrapper}:hover & {
    color: ${theme('drawer.helperHover')};
  }
`
export const DotList = styled.div`
  ${css.flex()};
  margin-left: 5px;
  margin-right: 3px;
`
const dotColor = (scale) => {
  let key = `heatmap.scale_${scale}`
  if (scale === 'empty') {
    key = 'heatmap.empty'
  }
  return theme(key)
}

/* eslint-disable */
export const ColorDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 3px;
  margin-top: 2px;
  margin-right: 2px;
  background-color: ${(props) => dotColor(props.scale)(props)};
`
/* eslint-enable */
