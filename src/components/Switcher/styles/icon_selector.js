import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

const width = '28px'
const height = '25px'

export const Wrapper = styled.div.attrs((props) => ({
  'data-testId': props.testId,
}))`
  ${cs.flex('align-center')};
  position: relative;
`
export const AccessZone = styled.div`
  position: absolute;
  height: 30px;
  width: 100px;
  top: -30px;
  left: 0;
`
export const Tabs = styled.div`
  ${cs.flex()};
  position: relative;
  padding: 3px 5px;
  border-radius: 6px;
  z-index: 2;
  border: 1px solid;
  border-color: transparent;
  background-color: #002b35;

  ${Wrapper}:hover & {
    border-color: #003b4a;
  }
  ${AccessZone}:hover & {
    border-color: #003b4a;
  }
  transition: all 0.25s;
`
export const Label = styled.label`
  ${cs.flex('align-both')};
  width: ${width};
  height: ${height};
  font-size: 15px;
  z-index: 2;
  transition: color 0.15s ease-in;

  &:hover {
    cursor: pointer;
  }
`
export const IconHoverWrapper = styled.div`
  position: relative;
`
export const HoverText = styled.span`
  position: absolute;
  width: 80px;
  left: -20px;
  top: 30px;
  font-size: 12px;
  opacity: 0;
  overflow: hidden;
  ${IconHoverWrapper}:hover & {
    opacity: 1;
  }
  transition: opacity 0.25s;
  transition-delay: 0.3s;
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
  background-color: #0b3546;
  z-index: 1;
  border-radius: 6px;

  ${Wrapper}:hover & {
    background-color: #0f3f52;
  }
  ${AccessZone}:hover & {
    background-color: #0f3f52;
  }

  transition: 0.25s ease-out;
  transform: ${({ index }) => `translateX(${index * 100}%)`};
`
