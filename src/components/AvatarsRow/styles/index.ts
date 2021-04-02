import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

import ImgFallback from '@/components/ImgFallback'
import { getLiSize, getAvatarSize, getUlMarginRight } from './metric'
import type { TAvatarSize } from '../spec'

export const Wrapper = styled.ul<{ total: number }>`
  ${css.flex('align-center')};
  flex-direction: row-reverse;
  list-style-type: none;
  margin: auto;
  padding: 0px 8px 0px 0px;
  margin-right: ${({ total }) => getUlMarginRight(total)};
`
// height: 49px;
type TBaseAvatarItem = { size: TAvatarSize; noHoverMargin: boolean }
const BaseAvatarItem = styled.li<TBaseAvatarItem>`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: relative;
  width: ${({ size }) => getLiSize(size)};

  &:hover {
    margin-left: ${({ noHoverMargin }) => (noHoverMargin ? '0' : '10px')};
    margin-right: ${({ noHoverMargin }) => (noHoverMargin ? '0' : '10px')};
    transition-delay: 0.1s;
  }
  transition: all 0.1s;
`

export const AvatarsItem = styled(BaseAvatarItem)`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: relative;
  width: ${({ size }) => getLiSize(size)};
  filter: grayscale(0.3);
  &:hover {
    filter: grayscale(0);
  }

  transition: all 0.1s;
`
export const TotalOneOffset = styled.span`
  margin-right: 10px;
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
