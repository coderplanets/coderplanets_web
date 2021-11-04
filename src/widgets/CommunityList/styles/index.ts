import styled from 'styled-components'

import type { TSpace } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'

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
export const Logo = styled(CommunityFaceLogo)<{ size: number }>`
  fill: ${theme('thread.articleTitle')};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  display: block;
`

export const MoreWrapper = styled.div`
  ${css.flex('align-center')}
  color: ${theme('button.primary')};
  font-weight: bold;
  font-size: 12px;
  margin-left: -2px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  transition: all 0.1s;
`
