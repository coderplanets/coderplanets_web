import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

import ImgFallback from '@/components/ImgFallback'
import { getLiSize, getAvatarSize } from './metric'
import type { TAvatarSize } from '../spec'

// height: 49px;
type TWrapper = { size: TAvatarSize }
export const Wrapper = styled.li<TWrapper>`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: relative;
  width: ${({ size }) => getLiSize(size)};
  z-index: 2;
  filter: grayscale(0.3);

  &:hover {
    filter: grayscale(0);
    z-index: 3;
    transform: scale(1.2);
  }

  transition: all 0.2s;
`
type TAvatarsImg = { size: string; onClick: () => void; scrollPosition: any }
export const AvatarsImg = styled(Img)<TAvatarsImg>`
  border: 2px solid;
  border-color: ${theme('thread.commentsUserBorder')};
  border-radius: 100px 100px 100px 100px;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 100;

  width: ${({ size }) => getAvatarSize(size)};
  height: ${({ size }) => getAvatarSize(size)};
  display: block;

  text-align: center;
`
type TAvatarsMore = { size: TAvatarSize; total: number }
export const AvatarsMore = styled.span<TAvatarsMore>`
  ${css.flex('align-both')};
  font-size: 14px;
  border-color: #113744;
  color: ${theme('thread.articleTitle')};
  background-color: #113744;
  border-radius: 100px 100px 100px 100px;
  font-family: sans-serif;
  font-weight: ${({ total }) => (total >= 1000 ? 600 : 200)};

  min-width: ${({ size }) => getAvatarSize(size)};
  height: ${({ size }) => getAvatarSize(size)};

  padding-left: ${({ total }) => (total >= 1000 ? '5px' : '3px')};

  &:hover {
    cursor: pointer;
  }
`
export const AvatarFallback = styled(ImgFallback)`
  border: 1px solid;
  border-color: #113744;
`
export const UserPopContent = styled.div`
  padding: 5px 10px;
`
