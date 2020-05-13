import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

import { Block } from './index'

export const Wrapper = styled.div`
  ${cs.flex()};
  flex-grow: 1;
  min-height: 200px;
  padding: 0 25px;
  padding-top: 10px;
  border-left: 1px solid #024250;
  border-bottom: 1px solid #024250;

  ${Block}:hover & {
    border-left: 1px solid #2d7eb1;
  }
  transition: all 0.25s;
`
export const Main = styled.div`
  ${cs.flexColumn()};
  flex-grow: 1;
`
export const VersionTag = styled.div`
  font-size: 20px;
  color: ${theme('thread.articleTitle')};
`
export const PublishInfo = styled.div`
  ${cs.flex('align-center')};
  margin-top: 8px;
`
export const DateText = styled.div`
  margin-left: 15px;
  font-size: 13px;
`
export const CoverImage = styled(Img)`
  width: 65px;
  height: 65px;
  display: block;
  border-radius: 3px;
  margin-top: 8px;
`
