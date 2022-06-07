import styled from 'styled-components'

import type { TTestable, TActive, TSpace } from '@/spec'
import HookSVG from '@/icons/Hook'

// import Img from '@/Img'
import css, { theme } from '@/utils/css'

type TWrapper = TTestable & TSpace

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('align-center')};

  margin-top: ${({ top }) => `${top}px` || 0};
  margin-bottom: ${({ bottom }) => `${bottom}px` || 0};
  margin-left: ${({ left }) => `${left}px` || 0};
  margin-right: ${({ right }) => `${right}px` || 0};
`
export const CheckIcon = styled(HookSVG)<TActive>`
  ${css.size(13)}
  fill: ${theme('baseColor.green')};
  margin-right: 8px;

  visibility: ${({ $active }) => ($active ? 'visible' : 'hidden')};
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  max-width: ${({ $active }) => ($active ? 'auto' : 0)};
  transition: all 0.2s;
`
export const Title = styled.div<TActive>`
  color: ${({ $active }) =>
    $active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: 13px;
`
