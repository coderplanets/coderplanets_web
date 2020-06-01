import styled from 'styled-components'

import { theme, cs } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  width: 455px;
  min-height: 300px;
`
export const BodyWrapper = styled.div`
  ${cs.flex('align-center')};
  flex-wrap: wrap;
  margin-top: 25px;
`
export const Entry = styled.a`
  ${cs.flex('align-start')};
  width: 225px;
  height: 75px;
  padding-left: 15px;
  text-decoration: none;
`
export const Logo = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  height: 18px;
  width: 18px;
  display: block;
  margin-top: 4px;

  ${Entry}:hover & {
    fill: #2d7eb1; /* primaryColor */
    cursor: pointer;
  }
`
export const Intro = styled.div`
  ${cs.flexColumn('align-start')};
  margin-left: 10px;
`
export const Title = styled.div`
  ${cs.flex('align-center')};
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
  margin-top: 5px;
`
export const Wip = styled.div`
  color: #007372;
  border: 1px solid;
  border-color: #007372;
  margin-left: 10px;
  font-size: 10px;
  padding: 0 2px;
  border-radius: 4px;
`
