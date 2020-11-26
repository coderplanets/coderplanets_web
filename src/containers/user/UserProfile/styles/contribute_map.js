import styled from 'styled-components'

import { theme, css } from '@/utils'

const dotColor = (scale) => {
  let key = `heatmap.scale_${scale}`
  if (scale === 'empty') {
    key = 'heatmap.empty'
  }
  return theme(key)
}

export const Wrapper = styled.div`
  padding: 0 10px;
`
export const Header = styled.div`
  ${css.flex('align-center')};
`
export const Divider = styled.div`
  width: 100%;
  padding: 0 5px;
  height: 1px;
  background: ${theme('thread.articleDigest')};
  opacity: 0.2;
  margin-top: 12px;
  margin-bottom: 16px;
`
export const Title = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleTitle')};
  flex-grow: 1;
  margin-top: -4px;
`
export const DotText = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
`
export const DotList = styled.div`
  ${css.flex('align-center')};
  margin-left: 5px;
  margin-right: 3px;
`
/* eslint-disable */
export const ColorDot = styled.div`
  ${css.size(8)};
  border-radius: 2px;
  margin-right: 3px;
  background-color: ${(props) => dotColor(props.scale)(props)};
`
/* eslint-enable */
