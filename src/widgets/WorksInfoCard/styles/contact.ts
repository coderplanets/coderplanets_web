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
export const SocialWrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
  margin-left: -4px;
`
export const SocialItem = styled.div`
  ${css.flex('align-center')};
  padding: 1px 5px;
  background: #00333e;
  color: ${theme('thread.articleTitle')};
  margin-top: 5px;
  margin-right: 3px;
  border-radius: 5px;
`
export const SocialIcon = styled(Img)<{ size?: number }>`
  ${({ size }) => css.size(size || 20)};
  fill: ${theme('thread.articleDigest')};

  ${SocialItem}:hover & {
    fill: ${theme('thread.articleTitle')};
  }
  cursor: pointer;
`
export const SocialName = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
