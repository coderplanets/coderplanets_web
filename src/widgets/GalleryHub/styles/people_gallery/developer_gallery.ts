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
  width: 25%;
  height: 308px;
`
export const Header = styled.div`
  ${css.flexColumn()};
`
export const Body = styled.div`
  ${css.flexColumnGrow('align-both')};
  cursor: pointer;
`
export const Avatar = styled(Img)`
  ${css.circle(58)};
`
export const Intro = styled.div`
  ${css.flexColumn('align-both')};
  margin-top: 15px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  cursor: pointer;
`
export const Digest = styled.div`
  color: ${theme('thread.articleDigest')};
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  height: 65px;
  opacity: 0.9;
  cursor: pointer;

  ${Block}:hover & {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
  }
  transition: all 0.2s;
`
export const SocialWrapper = styled.div`
  margin-top: 8px;
  opacity: 0;
  border-top: 1px solid #004352;

  ${Block}:hover & {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
  }
  transition: all 0.2s;
`
export const WorksWrapper = styled.div`
  ${css.flex('align-center')}
`
export const WorkIcon = styled(Img)`
  ${css.circle(16)};
  margin-right: 5px;
  filter: saturate(0.8);

  ${Block}:hover & {
    filter: saturate(1);
    cursor: pointer;
  }
`
export const Footer = styled(FooterBase)``
