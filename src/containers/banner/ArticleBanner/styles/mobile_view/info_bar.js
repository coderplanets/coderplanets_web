import styled from 'styled-components'

import Img from '@/Img'
import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  position: absolute;
  bottom: -40px;
  left: 0;
  ${cs.flex('justify-between', 'align-center')};
  background: ${theme('drawer.articleBg')};
  padding-left: 16px;
  padding-right: 15px;
  padding-top: 8px;
  border-radius: 5px;
  width: calc(100% - 50px);
  margin-left: 25px;
  height: 60px;
  z-index: 1;
  box-shadow: ${theme('drawer.shadow')};
`
export const AuthorInfo = styled.div`
  ${cs.flex('align-center')};
  margin-top: -6px;
`
export const Avatar = styled(Img)`
  ${cs.circle('26px')};
  display: block;
`
export const Name = styled.div`
  margin-left: 10px;
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
`
