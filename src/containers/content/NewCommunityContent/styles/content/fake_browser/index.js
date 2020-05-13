import styled from 'styled-components'

import { cs, theme } from '@/utils'
import Img from '@/Img'

const headerBg = '#053542'
const taberBg = '#022A35'
const contentBg = '#03303c'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  width: 100%;
  height: 70vh; /* TODO  */
  border-radius: 6px;
  background: ${contentBg};
  border: 1px solid;
  border-color: ${contentBg};
`
export const Header = styled.div`
  ${cs.flex()};
  width: 100%;
  display: flex;
  padding: 8px 20px 0 12px;
  padding-left: 16px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 36px;
  background: ${headerBg};
`
export const Tab = styled.div`
  ${cs.flex('align-center')};
  flex-basis: 218px;
  background: ${taberBg};
  border-bottom: 1px solid;
  border-bottom-color: ${taberBg};
  height: 29px;
  min-width: 0;
  position: relative;
  margin: 0 5px;
  font-size: 0;

  &:before {
    content: '';
    position: absolute;
    z-index: 10;
    align-self: flex-start;
    height: 28px;
    width: 16px;
    background: ${taberBg};
    border-bottom: 1px solid;
    border-bottom-color: ${taberBg};
    left: 0;
    transform: skewx(-25deg);
    transform-origin: left top;
  }

  &:after {
    content: '';
    position: absolute;
    width: 16px;
    z-index: 10;
    align-self: flex-start;
    height: 28px;
    background: ${taberBg};
    border-bottom: 1px solid;
    border-bottom-color: ${taberBg};

    right: 0;
    transform: skewx(25deg);
    transform-origin: right top;
  }
`
export const TabIcon = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 3px;
  background: ${headerBg};
  margin-left: 15px;
`
export const TabContent = styled.div`
  z-index: 100;
  flex-grow: 1;
  padding-left: 8px;
  font-size: 12.6px;
  line-height: 28px;
  cursor: default;
  max-width: 200px;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`
export const AddressBar = styled.div`
  width: 100%;
  ${cs.flex('align-center')};
  background: ${taberBg};
  border-bottom: 1px solid;
  border-bottom-color: ${taberBg};
  padding-left: 4px;
  padding-right: 4px;
  height: 38px;
`
export const ToolbarWrapper = styled.div`
  border-radius: 2px;
  margin-left: 2px;
  margin-right: 2px;
  padding: 4px;
  height: 24px;
`
export const ToolIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 16px;
  height: 16px;
  display: block;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
`
export const LockIcon = styled(ToolIcon)`
  width: 12px;
  height: 12px;
  margin-top: 2px;
`
export const Form = styled.form`
  ${cs.flex('align-center')};
  flex-grow: 1;
  background: ${headerBg};
  height: 28px;
  border-radius: 15px;
  margin-left: 4px;
  margin-right: 2px;
  padding-left: 5px;
`
export const Input = styled.div`
  display: block;
  border: none;
  width: 100%;
  padding-left: 4px;
  font-size: 14px;
`
export const DomainText = styled.span`
  color: #309999;
  margin-left: 1px;
`
