import styled from 'styled-components'

import type { TActive } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div<TActive>`
  ${css.flexColumn()};
  color: ${theme('thread.articleDigest')};
  margin-bottom: 15px;
`
export const Row = styled.div`
  ${css.flex('align-center')};
`
export const LinkIcon = styled(Img)`
  ${css.size(13)};
  fill: ${theme('thread.articleDigest')};
  margin-right: 6px;
  margin-top: 2px;
`
export const LinkAddr = styled.a`
  display: block;
  color: #139c9e;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #139c9e;
  }
`
export const DownloadWrapper = styled.div`
  ${css.flex('justify-between')};
  margin-top: 15px;
`
export const PlatformWrapper = styled.div`
  ${css.flex('align-center')};
  background: #0d3d4e;
  border-radius: 6px;
  padding: 3px 8px;
`
export const PlatfromIcon = styled(Img)`
  ${css.size(20)};
  fill: ${theme('thread.articleTitle')};
  margin-right: 6px;
`
export const PlatformIntro = styled.div``
export const PlatformDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 10px;
`
export const PlatformTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  margin-top: -5px;
`
