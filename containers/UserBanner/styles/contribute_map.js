import styled from 'styled-components'

import { theme } from '../../../utils'

export const Wrapper = styled.div``

export const TitleWrapper = styled.div`
  display: flex;
`

export const HelpText = styled.div`
  color: ${theme('preview.helper')};
  margin-top: 2px;
  &:hover {
    color: ${theme('preview.helperHover')};
    cursor: pointer;
  }
  ${TitleWrapper}:hover & {
    color: ${theme('preview.helperHover')};
  }
  transition: color 0.2s;
`
export const Title = styled.div`
  font-size: 0.8rem;
  color: ${theme('banner.desc')};
  margin-bottom: 7px;
  flex-grow: 1;
  opacity: 0.6;

  ${Wrapper}:hover & {
    opacity: 1;
    font-weight: bold;
  }
`

export const DotWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  justify-content: flex-end;
`
export const DotText = styled.div`
  font-size: 0.8rem;
  color: ${theme('banner.desc')};
  opacity: 0.6;

  ${Wrapper}:hover & {
    opacity: 1;
    font-weight: bold;
  }
`
export const DotList = styled.div`
  margin-left: 5px;
  margin-right: 3px;
  display: flex;
`
const dotColor = scale => {
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
  background-color: ${props => dotColor(props.scale)(props)};
`
/* eslint-enable */
