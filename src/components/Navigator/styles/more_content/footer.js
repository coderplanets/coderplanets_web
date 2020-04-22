import styled from 'styled-components'

import { theme, cs } from '@utils'
import Img from '@Img'

import { Wip } from './index'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-start')};
  width: 100%;
  min-height: 90px;
  background: #023a48;
  padding: 26px 20px;
  padding-bottom: 20px;
`
export const Entry = styled.div`
  ${cs.flex('align-end')};
  width: 100%;
  margin-bottom: 10px;
`
export const Logo = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  height: 18px;
  width: 18px;
  display: block;
  ${Entry}:hover & {
    fill: #2d7eb1; /* primaryColor */
    cursor: pointer;
  }
`
export const Intro = styled.div`
  ${cs.flex('align-center')};
  margin-left: 12px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
  ${Entry}:hover & {
    color: #2d7eb1; /* primaryColor */
    cursor: pointer;
  }
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-left: 10px;
`
export const Notice = styled(Wip)`
  background-color: #145b73;
  color: #90b5b7;
  border: none;
  /* color: #007372;
  border: 1px solid;
  border-color: #007372;
  margin-left: 10px;
  font-size: 10px;
  padding: 0 1px;
  border-radius: 4px; */
`
