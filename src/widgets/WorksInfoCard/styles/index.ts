import styled from 'styled-components'

import type { TSpace } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.media.mobile`
    padding-left: 30px;
  `};
`
export const Row = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 10px;
`
export const SlashSign = styled.div`
  color: ${theme('button.primary')};
  font-size: 10px;
  font-weight: bolder;
  font-family: monospace;
  margin-right: 6px;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  opacity: 0.8;
`
export const Divider = styled.div<TSpace>`
  margin-top: ${({ top }) => `${top}px`};
  margin-bottom: ${({ bottom }) => `${bottom}px`};
  width: 100%;
  height: 1px;
  background-color: ${theme('thread.articleDigest')};
  opacity: 0.2;
`
