import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

import { Wrapper as WrapperBase, Entry as EntryBase } from './index'

export const Wrapper = styled(WrapperBase)`
  width: 100%;
`
export const BodyWrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
`
export const Entry = styled(EntryBase)<{ index: number }>`
  ${css.flex('align-center')};
  width: 48%;
  height: auto;
  margin-bottom: 10px;
  margin-right: ${({ index }) => (index % 2 !== 0 ? '0' : '10px')};
  background: #0d3442;
  border-radius: 8px;
  padding: 10px 8px;
`
export const Logo = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(20)};

  ${Entry}:hover & {
    fill: #2d7eb1; /* primaryColor */
    cursor: pointer;
  }
`
export const Intro = styled.div`
  ${css.flexColumn('align-start')};
  margin-top: 8px;
`
export const Title = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 12px;

  ${Entry}:hover & {
    color: #2d7eb1; /* primaryColor */
    cursor: pointer;
  }
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  ${css.cutRest('100px')};
  font-size: 11px;
  margin-top: 2px;
`
