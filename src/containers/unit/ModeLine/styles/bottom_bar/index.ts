import styled from 'styled-components'

import { TTestable } from '@/spec'
import Img from '@/Img'
import { css, theme } from '@/utils'

type IMenuIcon = { active: boolean; colorTheme: string }

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & { isMenuActive: boolean }>`
  position: fixed;
  left: 0;
  bottom: 0px;
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  width: 100%;
  height: 28px;
  background: #0e3b4a;
  z-index: ${css.zIndex.modeLine};
  box-shadow: ${({ isMenuActive }) =>
    !isMenuActive ? '' : '-5px 6px 37px -8px rgba(0, 0, 0, 0.42)'};
`
export const ItemsWrapper = styled.div`
  ${css.flex('justify-between', 'align-center')};
  height: 100%;
  width: auto;
  flex-grow: 1;
  height: 100%;
  margin-left: 25px;
  margin-right: 18px;
`
export const MenuItem = styled.div`
  ${css.flex('align-center')};
`

export const MenuIcon = styled(Img)<IMenuIcon>`
  fill: ${({ active, colorTheme }: IMenuIcon) => {
    if (colorTheme) return theme(colorTheme)
    return active ? '#2ca1a2' : theme('thread.articleTitle')
  }};

  ${css.size(15)};

  :last-child {
    margin-right: 0;
  }
`
export const MenuDesc = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 10px;
  margin-left: 3px;
`
