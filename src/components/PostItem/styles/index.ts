import styled from 'styled-components'

import type { TPost, TAccount } from '@/spec'
import { theme, css } from '@/utils'

import { getOpacity } from './metrics'

type TWrapper = {
  entry: TPost
  active?: TPost | null
  divider: boolean
  accountInfo: TAccount
}

export const Wrapper = styled.article<TWrapper>`
  ${css.flex()};
  position: relative;
  opacity: ${({ entry, active, accountInfo }) =>
    getOpacity(entry, active, accountInfo)};

  padding-top: ${({ divider }) => (divider ? '10px' : '6px')};
  padding-bottom: ${({ divider }) => (divider ? '10px' : '6px')};
  border-bottom: ${({ divider }) => (divider ? '1px solid' : '0')};
  border-bottom-color: ${theme('thread.articleDivider')};

  transition: all 0.25s;
`
export const Main = styled.div`
  ${css.flexColumnGrow()};
`
export const holder = 1
