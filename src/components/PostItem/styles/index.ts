import styled from 'styled-components'

import type { TPost, TC11N, TID } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

import { getOpacity } from './metrics'

type TWrapper = {
  entry: TPost
  activeId?: TID | null
  c11n: TC11N
}

export const Wrapper = styled.article<TWrapper>`
  ${css.flex()};
  position: relative;
  opacity: ${({ entry, activeId, c11n }) => getOpacity(entry, activeId, c11n)};

  padding-top: ${({ c11n }) => (c11n.contentDivider ? '10px' : '6px')};
  padding-bottom: ${({ c11n }) => (c11n.contentDivider ? '10px' : '6px')};
  border-bottom: ${({ c11n }) => (c11n.contentDivider ? '1px solid' : '0')};
  border-bottom-color: ${theme('thread.articleDivider')};

  transition: all 0.25s;
`
export const Main = styled.div`
  ${css.flexColumnGrow()};
`
export const holder = 1
