import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  padding: 20px;
  height: 320px;
`
export const QRCodePic = styled(Img)`
  width: 220px;
  object-fit: contain;
  display: block;
  border-radius: 5px;
`
export const DescWrapper = styled.div`
  ${cs.flexColumn()};
  margin-top: 5%;
  color: ${theme('thread.articleDigest')};
  margin-left: 18px;
`
export const Title = styled.h3`
  color: ${theme('thread.articleTitle')};
  margin-bottom: 5%;
`
