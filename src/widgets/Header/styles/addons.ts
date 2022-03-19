import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

import MagicStickSVG from '@/icons/MagicStick'
import HeaderSearchSVG from '@/icons/HeaderSearch'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const SettingIcon = styled(MagicStickSVG)`
  fill: ${theme('header.fg')};
  ${css.size(16)};
  margin-top: -2px;
  cursor: pointer;
`
export const Divider = styled.div`
  border-left: 1px solid;
  border-color: ${theme('header.fg')};
  height: 15px;
  margin-left: 10px;
  margin-right: 6px;
  opacity: 0.7;
`
export const HeaderSearchIcon = styled(HeaderSearchSVG).attrs(
  ({ testid }: TTestable) => ({
    'data-test-id': testid,
  }),
)<TTestable>`
  fill: ${theme('header.fg')};
  ${css.size(18)};
  display: block;
  cursor: pointer;
  margin-right: 12px;
`

export const Operations = styled.div`
  ${css.flex('align-center')};
`
export const Search = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  color: ${theme('header.fg')};
`
