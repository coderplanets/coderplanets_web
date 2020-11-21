import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

import { CONTENT_WIDTH } from './metric'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  position: relative;
  ${css.flex('align-center', 'justify-between')};
  width: ${`${CONTENT_WIDTH}px`};
  height: 35px;
  margin-top: 25px;
  margin-left: 0;
  margin-right: 0;
`
export const Bar = styled.div`
  position: absolute;
  height: 3px;
  border-radius: 3px;
  width: 100%;
  background-color: #0d3440;
  z-index: -1;
`
export const Step = styled.div`
  ${css.flexColumn('align-both')};
  margin-top: 22px;
  width: 25%;
`
export const FirstStep = styled(Step)`
  align-content: flex-start;
`
export const Dot = styled.div`
  background-color: ${({ active }) =>
    active ? theme('thread.articleDigest') : '#1c4048'};
  width: ${({ active }) => (active ? '11px' : '10px')};
  height: ${({ active }) => (active ? '11px' : '10px')};
  border-radius: 100%;
  z-index: 1;

  &:hover {
    background-color: ${theme('thread.articleDigest')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
export const Hint = styled.div`
  font-size: 12px;
  margin-top: ${({ active }) => (active ? '5px' : '6px')};

  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  opacity: ${({ active }) => (active ? 1 : 0)};

  ${Wrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.25s;
`
export const PublishIcon = styled(Img)`
  ${css.size(18)};
  fill: ${theme('thread.articleDigest')};
  margin-left: 3px;
  opacity: 0.6;
  z-index: 2;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`
