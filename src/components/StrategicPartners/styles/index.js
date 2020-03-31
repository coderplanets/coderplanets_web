import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  margin-left: 20px;
  margin-top: 45%;
`
export const Header = styled.div`
  ${cs.flex('justify-between', 'align-end')};
  align-items: center;
  margin-bottom: 12px;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const AboutIcon = styled(Img)`
  width: 14px;
  height: 14px;
  fill: ${theme('thread.articleDigest')};
  display: block;
  opacity: 0;
  margin-top: 1px;

  &:hover {
    fill: ${theme('banner.title')};
    cursor: pointer;
  }

  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: all 0.2s;
`
