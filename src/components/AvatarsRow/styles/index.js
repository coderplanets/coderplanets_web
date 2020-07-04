import styled from 'styled-components'

import Img from '@/Img'
import { theme, cs } from '@/utils'

import { getLiSize, getAvatarSize, getTotalCountSize } from './metric'

export const Wrapper = styled.ul`
  ${cs.flex()};
  flex-direction: row-reverse;
  list-style-type: none;
  margin: auto;
  height: ${({ height }) => height};
  padding: 0px 8px 0px 0px;
`
// height: 49px;
const BaseAvatarItem = styled.li`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: relative;
  /* width: 25px; */
  /* width: 20px; */
  width: ${({ size }) => getLiSize(size)};

  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
  ${Wrapper}:hover & {
    margin-left: 5px;
  }
  transition: all 0.3s;
`

export const AvatarsItem = styled(BaseAvatarItem)`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: relative;
  /* width: 25px; */
  width: ${({ size }) => getLiSize(size)};
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
  ${Wrapper}:hover & {
    margin-left: 5px;
  }
  transition: all 0.3s;
  ${cs.media.mobile`display: none`};
`

export const AvatarsImg = styled(Img)`
  border: 2px solid;
  border-color: ${theme('thread.commentsUserBorder')};
  border-radius: 100px 100px 100px 100px;
  color: #ffffff;
  display: block;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 100;

  width: ${({ size }) => getAvatarSize(size)};
  height: ${({ size }) => getAvatarSize(size)};

  text-align: center;
`
export const AvatarsMore = styled.span`
  ${cs.flex('align-both')};
  font-size: ${({ total }) => getTotalCountSize(total)};

  border-color: ${theme('thread.articleHover')};
  color: ${theme('thread.articleTitle')};
  background-color: ${theme('thread.articleHover')};
  border-radius: 100px 100px 100px 100px;
  font-family: sans-serif;
  font-weight: ${({ total }) => (total >= 1000 ? 600 : 200)};

  width: ${({ size }) => getAvatarSize(size)};
  height: ${({ size }) => getAvatarSize(size)};

  padding-left: ${({ total }) => (total >= 1000 ? '5px' : '3px')};

  &:hover {
    cursor: pointer;
  }
`
export const AvatarFallback = styled(AvatarsMore)`
  font-size: 14px;
  background: #074857;
  font-weight: bold;
`
