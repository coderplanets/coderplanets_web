import styled from 'styled-components'

import { css, theme } from '@/utils'

const Block = styled.div`
  position: relative;
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  height: 100%;
  background: ${({ bgColor }) => bgColor};
  padding-left: 10px;
`
const ArrowShape = styled.div`
  position: absolute;
  right: -10px;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 10px solid;
  border-left-color: ${({ bgColor }) => bgColor};
  z-index: 1;
`
export const TagWrapper = styled(Block)`
  padding-left: 0;
  padding-right: 0;
`
export const ArrowShapeLeft = styled(ArrowShape)`
  left: -10px;
  border-left: 10px solid;
  border-left-color: ${({ bgColor }) => bgColor};
  transform: rotate(180deg);
  box-shadow: -5px 6px 37px -8px rgba(0, 0, 0, 0.42);
`
export const InnerWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Dot = styled.div`
  ${css.circle('5px')};
  background: tomato;
  display: block;
  margin: 0 5px;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`
