import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  margin-right: 25px;
`
export const MeetupIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  height: 70px;
  width: 100px;
  display: block;
  margin-top: -17px;
`
export const LogoDesc = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const NaviFooter = styled.div`
  ${cs.flexColumn('align-start')};
  border-top: 1px solid;
  border-top-color: #0d4353;
  padding-top: 20px;
  color: ${theme('thread.articleDigest')};
  margin-left: 10px;
  margin-top: 20px;
`
export const Terms = styled.div`
  ${cs.flex('align-center')};
  margin-top: 12px;
`
export const TermItem = styled.div`
  font-weight: bold;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
