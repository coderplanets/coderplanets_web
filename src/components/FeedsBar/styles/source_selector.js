import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 75px;
  color: ${theme('thread.articleDigest')};
  background: #022935;
  border: 1px solid;
  border-color: #013648;
  padding-top: 2x;
`
export const Header = styled.div`
  ${cs.flex()};
  color: ${theme('thread.articleDigest')};
`
// padding: 10px 2px;
export const Block = styled.div`
  ${cs.flexColumn('align-both')};

  &:hover {
    cursor: pointer;
    background: #05303e;
  }
`
export const Icon = styled(Img)`
  ${cs.circle('34px')};
`
export const Title = styled.div`
  ${cs.truncate('60px')};
  text-align: center;
  padding-left: 5px;
  color: ${theme('thread.articleDigest')};
`
