import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div<TActive>`
  ${css.flexColumn()};
  color: ${theme('thread.articleDigest')};
  margin-bottom: 15px;
  margin-top: 16px;
`
export const Row = styled.div`
  ${css.flex('align-center')};
`
export const SocialWrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
  margin-left: -4px;
`
export const EmptyHint = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  margin-left: 5px;
`
export const SocialItem = styled.div<{ isEmail: boolean }>`
  ${css.flex('align-center')};
  padding: 1px 5px;
  background: #00333e;
  color: ${theme('thread.articleTitle')};

  margin-top: ${({ isEmail }) => (isEmail ? '3px' : 0)};
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
