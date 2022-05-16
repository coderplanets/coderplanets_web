import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import { TYPE } from '@/constant'
import css, { theme, zIndex } from '@/utils/css'

type TMenuIcon = { active: boolean; colorTheme: string; raw?: string }

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & { isMenuActive: boolean }>`
  position: fixed;
  left: 0;
  bottom: 0px;
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  width: 100%;
  height: 35px;
  background: #0e3b4a;
  z-index: ${zIndex.modeLine};
  box-shadow: ${({ isMenuActive }) =>
    !isMenuActive ? '' : '-5px 6px 37px -8px rgba(0, 0, 0, 0.42)'};
`
export const ItemsWrapper = styled.div`
  ${css.flex('justify-between', 'align-center')};
  height: 100%;
  width: auto;
  flex-grow: 1;
  height: 100%;
  margin-left: 18px;
  margin-right: 18px;
`
export const MenuItem = styled.div`
  ${css.flex('align-center')};
`
export const MenuIcon = styled(Img)<TMenuIcon>`
  fill: ${({ active, colorTheme }: TMenuIcon) => {
    if (colorTheme) return theme(colorTheme)
    return active ? '#2ca1a2' : theme('thread.articleDigest')
  }};

  ${({ raw }) => {
    if (raw === TYPE.MM_TYPE.UPVOTE) return css.size(10)
    return css.size(14)
  }};

  :last-child {
    margin-right: 0;
  }
`
export const MenuDesc = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 12px;
  margin-left: 5px;
  margin-top: -1px;
`
