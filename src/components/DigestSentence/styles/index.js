import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;

  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom};
  padding-left: ${({ left }) => left};
  padding-right: ${({ right }) => right};

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: color 0.2s;
`
export const PreviewWrapper = styled.div`
  display: inline-flex;
  opacity: 0;
  margin-left: 8px;
  align-items: center;

  ${Wrapper}:hover & {
    opacity: 0.6;
  }
  transition: opacity 0.25s;
`
export const PreviewIcon = styled(Img)`
  fill: ${theme('thread.extraInfo')};
  height: 14px;
  width: 14px;
  display: block;
  transform: rotate(180deg);
`
export const PreviewText = styled.span`
  color: ${theme('thread.extraInfo')};
  font-size: 12px;
  margin-right: 5px;
`
