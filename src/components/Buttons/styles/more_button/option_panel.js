import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  width: 100%;
  max-height: 200px;
  overflow: hidden;
`
export const Block = styled.div`
  ${cs.flex('align-start')};
  padding: 8px 15px;
  padding-left: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid;
  border-bottom-color: #0d3e4e;

  :last-child {
    padding-bottom: 10px;
    border-bottom: none;
  }

  &:hover {
    background: #0d3e4e;
    cursor: pointer;
  }
  transition: all 0.25s;
`
export const IconWrapper = styled.div`
  ${cs.flex('justify-center')};
  width: 24px;
`
export const Icon = styled(Img)`
  fill: ${theme('button.primary')};
  width: ${({ bigger }) => (bigger ? '24px' : '18px')};
  height: ${({ bigger }) => (bigger ? '24px' : '18px')};
  display: block;
  opacity: ${({ index }) => (index === 0 ? 1 : 0)};
  ${Block}:hover & {
    opacity: ${({ index }) => (index === 0 ? 1 : 0.8)};
  }
  transition: opacity 0.25s;
`
export const Intro = styled.div`
  ${cs.flexColumn()};
  margin-left: 7px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 11px;
  margin-top: 2px;
`
