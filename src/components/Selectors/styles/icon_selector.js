import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

const width = '28px'
const height = '25px'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flex('align-center')};
`
export const Tabs = styled.div`
  ${cs.flex()};
  position: relative;
  background-color: #fff;
  padding: 3px 5px;
  border-radius: 10px;
  z-index: 2;
  border: 1px solid;
  border-color: transparent;
  background-color: #002b35;

  ${Wrapper}:hover & {
    border-color: #003b4a;
  }
  transition: all 0.25s;
`
export const Label = styled.label`
  ${cs.flex('align-both')};
  width: ${width};
  height: ${height};
  font-size: 15px;
  border-radius: 10px;
  z-index: 2;
  transition: color 0.15s ease-in;

  &:hover {
    cursor: pointer;
  }
`
export const Icon = styled(Img)`
  fill: ${({ checked }) =>
    checked ? '#66b5e8' : theme('thread.articleDigest')};
  width: ${({ checked }) => (checked ? '14px' : '12px')};
  height: ${({ checked }) => (checked ? '14px' : '12px')};
  display: block;
  transition: all 0.25s;
`
export const Slider = styled.span`
  ${cs.flex()};
  position: absolute;
  width: ${width};
  height: ${height};
  background-color: #0f3f52;
  z-index: 1;
  border-radius: 6px;
  transition: 0.25s ease-out;

  transform: ${({ index }) => `translateX(${index * 100}%)`};
`
