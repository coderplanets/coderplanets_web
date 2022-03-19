import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'
import CheckedSVG from '@/icons/Checked'

import { CONTENT_WIDTH } from './metric'

type TWrapper = { testid?: string }
export const Wrapper = styled.div.attrs(({ testid }: TWrapper) => ({
  'data-test-id': testid,
}))<TWrapper>`
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
export const CheckIcon = styled(CheckedSVG)`
  ${css.size(18)};
  fill: ${theme('baseColor.green')};
  z-index: 1;
  cursor: pointer;
  background-color: #002a34;
`
export const Dot = styled.div<TActive>`
  background-color: ${({ active }) =>
    active ? theme('thread.articleDigest') : '#1c4048'};
  ${css.circle(18)};
  border: 4px solid;
  border-color: #002a34;
  z-index: 1;

  &:hover {
    background-color: ${theme('thread.articleDigest')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
export const Hint = styled.div<TActive>`
  font-size: 12px;
  margin-top: 6px;

  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  opacity: ${({ active }) => (active ? 1 : 0)};

  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
    cursor: pointer;
  }

  transition: opacity 0.2s;
`
export const PublishIcon = styled(Img)<TActive>`
  ${css.size(15)};
  margin-bottom: 2px;
  margin-top: 1px;
  fill: ${({ active }) =>
    active ? theme('baseColor.green') : theme('thread.articleDigest')};
  margin-left: 3px;
  background-color: #002a34;
  opacity: 0.9;
  z-index: 2;
`
