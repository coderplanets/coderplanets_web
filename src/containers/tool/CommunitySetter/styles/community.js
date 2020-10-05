import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  position: relative;
  margin-bottom: 10px;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
`
export const Logo = styled(Img)`
  width: 20px;
  height: 20px;
  display: block;
  margin-right: 5px;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  ${cs.truncate('100px')};

  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
  }
`
export const Mark = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: ${theme('baseColor.green')};
  position: absolute;
  right: -8px;
`
