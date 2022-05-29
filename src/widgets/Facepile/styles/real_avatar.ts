import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

import ImgFallback from '@/widgets/ImgFallback'
import { getLiSize, getAvatarSize } from './metric'
import type { TAvatarSize } from '../spec'

// height: 49px;
type TWrapper = { size: TAvatarSize }
export const Wrapper = styled.li<TWrapper>`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: relative;
  width: ${({ size }) => getLiSize(size)};

  &:hover {
    z-index: 3;
  }
`
export const InnerWrapper = styled.div`
  &:hover {
    filter: grayscale(0);
    transform: scale(1.2);
  }

  transition: all 0.2s;
`

type TAvatarsImg = { size: string; onClick: () => void; scrollPosition: any }
export const AvatarsImg = styled(Img)<TAvatarsImg>`
  border: 2px solid;
  border-color: ${theme('thread.commentsUserBorder')};
  color: #ffffff;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 100;

  ${({ size }) => css.circle(getAvatarSize(size))};

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

  padding-left: ${({ total }) => (total >= 1000 ? '5px' : '0')};
  padding-top: 1px;

  &:hover {
    cursor: pointer;
  }
`
export const AvatarFallback = styled(ImgFallback)`
  border: 1px solid;
  border-color: ${theme('textBadge')};
`
