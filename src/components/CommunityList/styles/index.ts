import styled from 'styled-components'

import { TSpace } from '@/types'
import { css, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
`
export const Linker = styled.a<TSpace>`
  margin-bottom: ${({ bottom }) => `${bottom}px`};
  margin-right: ${({ right }) => `${right}px`};
  display: block;
  &:hover {
    text-decoration: underline;
  }
`
export const Logo = styled(Img)<{ size: string }>`
  fill: ${theme('thread.articleTitle')};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  display: block;
`
export const PopoverInfo = styled.div`
  ${css.flex()};
  padding: 5px 10px;
  max-width: 240px;
`
export const PopCommunityLogo = styled(Img)`
  ${css.size(40)};
  margin-right: 8px;
`
export const PopCommunityInfo = styled.div`
  ${css.flexColumn()};
`
export const PopCommunityTitle = styled.div`
  font-weight: bold;
  color: ${theme('thread.articleTitle')};
`
export const PopCommunityDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
`
type TMoreWrapper = TSpace & { size: string }
export const MoreWrapper = styled.div<TMoreWrapper>`
  ${css.flex('align-center')}
  color: ${theme('thread.articleDigest')};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin-bottom: ${({ bottom }) => bottom};
  margin-left: 5px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
  transition: all 0.25s;
`
export const MoreIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
  transform: rotate(180deg);
  margin-left: 2px;

  ${MoreWrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
    margin-left: 4px;
  }
  transition: all 0.25s;
`
