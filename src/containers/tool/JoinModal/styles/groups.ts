import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div``
export const InnerWrapper = styled.div`
  ${css.flex('align-start', 'justify-between')};
  padding: 20px 30px;
  min-height: 320px;
  margin-top: 16px;
`
export const QRCodePic = styled(Img)<{ mask: boolean }>`
  width: 200px;
  height: 265px;
  margin-left: 10px;
  margin-top: 3px;
  object-fit: cover;
  display: block;
  border-radius: 5px;
  filter: ${({ mask }) => (mask ? 'blur(5px)' : 'none')};
`
export const Title = styled.h3`
  color: ${theme('thread.articleTitle')};
  margin-bottom: 10px;
`
export const DescWrapper = styled.div`
  ${css.flexColumn()};
  width: 260px;
  color: ${theme('thread.articleDigest')};
`
export const UL = styled.ul`
  list-style: circle;
`
export const LI = styled.li`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-bottom: 8px;
`
export const Focus = styled.span`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  margin-left: 1px;
  margin-right: 1px;
`
