import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

import { Block } from './index'

export const Wrapper = styled.div`
  ${css.flex()};
  flex-grow: 1;
  min-height: 200px;
  padding: 0 25px;
  padding-top: 10px;
  border-left: 1px solid #024250;
  border-bottom: 1px solid #024250;

  ${Block}:hover & {
    border-left: 1px solid #2d7eb1;
  }
  transition: all 0.2s;
`
export const Main = styled.div`
  ${css.flexColumn()};
  flex-grow: 1;
`
export const VersionTag = styled.div`
  font-size: 20px;
  color: ${theme('thread.articleTitle')};
`
export const PublishInfo = styled.div`
  ${css.flex('align-center')};
  margin-top: 8px;
`
export const DateText = styled.div`
  margin-left: 15px;
  font-size: 13px;
`
export const CoverImage = styled(Img)`
  ${css.size(65)};
  border-radius: 3px;
  margin-top: 8px;
`
