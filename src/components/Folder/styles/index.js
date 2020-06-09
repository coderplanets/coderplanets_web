import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

import { getWidth, getHeight } from './metric'

export const Wrapper = styled.div.attrs((props) => ({
  'data-testid': props.testid,
}))`
  position: relative;
  ${cs.flexColumn()};
  background-color: #004351;
  width: ${({ size }) => getWidth(size)};
  height: ${({ size }) => getHeight(size)};

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 10px;
  padding-top: 8px;
`
export const TabShape = styled.div`
  position: absolute;
  height: 10px;
  left: 0;
  bottom: 100%;
  display: block;
  width: 40%;
  border-top-left-radius: 8px;
  background-color: inherit;
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: calc(100% - 10px);
    border-bottom: 10px solid #004351;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
`
export const EditIconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  ${cs.flex('justify-center')};
  z-index: 1;
  width: 30px;
  height: 30px;
  background: #004351;
  opacity: 0;

  ${Wrapper}:hover & {
    opacity: 1;
    cursor: pointer;
  }

  transition: all 0.25s;
`
export const EditIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 18px;
  height: 18px;
  display: block;
  z-index: 2;
`
