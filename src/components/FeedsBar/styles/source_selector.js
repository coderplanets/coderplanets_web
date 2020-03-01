import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  width: 100%;
  color: ${theme('thread.articleDigest')};
  background: #022935;
  border: 1px solid;
  height: 75px;
  border-color: #013648;
  position: relative;
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
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`
export const Title = styled.div`
  ${cs.truncate('60px')};
  text-align: center;
  padding-left: 5px;
  color: ${theme('thread.articleDigest')};
`
