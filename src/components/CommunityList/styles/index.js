import styled from 'styled-components'

import { cs, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${cs.flex()};
  flex-wrap: wrap;
`
export const Linker = styled.a`
  margin-bottom: ${({ bottom }) => bottom};
  display: block;
  &:hover {
    text-decoration: underline;
  }
`

export const Logo = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin-left: 3px;
  display: block;
`
export const PopoverInfo = styled.div`
  ${cs.flex()};
  padding: 5px 10px;
  max-width: 240px;
`

export const PopCommunityLogo = styled(Img)`
  display: block;
  width: 40px;
  height: 40px;
  margin-right: 8px;
`

export const PopCommnityInfo = styled.div`
  ${cs.flexColumn()};
`

export const PopCommnityTitle = styled.div`
  font-weight: bold;
  color: ${theme('thread.articleTitle')};
`
export const PopCommnityDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
`
