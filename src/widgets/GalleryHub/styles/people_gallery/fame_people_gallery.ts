import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

import { Block as BlockBase, Footer as FooterBase } from './index'

export const Wrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
  color: ${theme('thread.articleDigest')};
  width: 100%;
`
export const Block = styled(BlockBase)`
  width: 33%;
  height: 260px;
`
export const Body = styled.div`
  ${css.flex('align-center')};
  &:hover {
    cursor: pointer;
  }
`
export const Avatar = styled(Img)`
  ${css.circle(60)};
  object-fit: cover;
`
export const Intro = styled.div`
  ${css.flexColumn()};
  margin-left: 14px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  cursor: pointer;
  ${css.cutRest('200px')};
`
export const AKA = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  opacity: 0.8;
  margin-bottom: 4px;
`
export const Birthday = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
`
export const Digest = styled.div`
  ${css.lineClamp(3)}
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  opacity: 0.9;
  margin-top: 20px;
  cursor: pointer;

  ${Block}:hover & {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
  }
  transition: all 0.2s;
`
export const Footer = styled(FooterBase)`
  opacity: 0.8;

  ${Block}:hover & {
    opacity: 1;
  }
`

export const CommentWrapper = styled.div`
  margin-bottom: 3px;
`
