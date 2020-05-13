import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  cursor: pointer;
`
export const Title = styled.div`
  ${cs.flex('align-center', 'justify-between')};
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 3px;
`
export const Intro = styled.div`
  ${cs.flex('justify-between', 'align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`
export const Total = styled.div``
export const Update = styled.div``

export const LockIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 12px;
  height: 12px;
  margin-top: -1px;
  display: block;
`
