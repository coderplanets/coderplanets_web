import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('align-start')};
  width: 100%;
  color: ${theme('thread.articleDigest')};
  padding: 0 10px;
  margin-bottom: 20px;
`
export const IntroImgHolder = styled.div`
  ${css.size(70)};
  ${css.flex('align-both')};
  border-radius: 5px;
  background-color: #03343f;
  cursor: pointer;
`
export const HolderIcon = styled(Img)`
  ${css.size(30)};
  fill: ${theme('thread.articleDigest')};
  opacity: 0.4;
  transform: rotate(90deg);

  ${IntroImgHolder}:hover & {
    opacity: 0.6;
  }
  transition: all 0.2s;
`
export const Section = styled.section`
  margin-left: 20px;
`
export const Title = styled.div`
  font-size: 16px;
  color: ${theme('thread.articleDigest')};
  margin-top: 5px;
`
export const Desc = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  margin-top: 8px;
`
