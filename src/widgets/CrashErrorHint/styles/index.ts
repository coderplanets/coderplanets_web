import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme, themeSkins } from '@/utils/themes'
import css from '@/utils/css'

type TThemeName = {
  t: string
}

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-center', 'justify-between')};
  height: 100vh;
  width: 100%;
  color: #6b7f83;
  background: #072d3a;

  /* background: ${theme('thread.bg')}; */
`
export const Header = styled.div`
  ${css.flex()};
`
// do not use common @/Img, because the theme in Img may not work
export const HintIcon = styled.img`
  ${css.size(40)};
  margin-right: 15px;
`
export const Title = styled.div<TThemeName>`
  font-size: 30px;
  color: ${({ t }) => themeSkins[t].thread.articleTitle};
  padding-bottom: 12px;
`
export const Desc = styled.p<TThemeName>`
  color: ${({ t }) => themeSkins[t].baseColor.red};
`
export const UL = styled.ul<TThemeName>`
  margin-left: -22px;
  color: ${({ t }) => themeSkins[t].thread.articleDigest};
`
export const Li = styled.li`
  margin-top: 4px;
`
export const Action = styled.span<{ t: string; noUnderline: boolean }>`
  color: ${({ t }) => themeSkins[t].link};
  margin-left: 3px;
  margin-right: 3px;

  &:hover {
    cursor: pointer;
    text-decoration: ${({ noUnderline }) =>
      noUnderline ? 'none' : 'underline'};
  }
`
export const Footer = styled.div`
  margin-bottom: 26px;
`
