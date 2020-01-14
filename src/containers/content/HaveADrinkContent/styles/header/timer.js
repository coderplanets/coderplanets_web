import styled from 'styled-components'

import Img from '@components/Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexGrow('align-center')}
  justify-content: center;
  width: 20%;
  padding-left: 6px;
`
export const IconWrapper = styled.div`
  position: relative;
`
export const OptionsWrapper = styled.div`
  position: absolute;
  left: 28px;
  top: 1px;
  width: 60px;
  opacity: 0;

  ${IconWrapper}:hover & {
    opacity: 1;
  }
  transition: all 0.2s;
`
export const HintMsg = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  display: block;
  width: 18px;
  height: 18px;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
