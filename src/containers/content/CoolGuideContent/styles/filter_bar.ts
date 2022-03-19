import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

import { WIDTH as NAVI_CATALOG_WIDTH } from '@/widgets/NaviCatalog/styles/metric'
import { SIDEBAR_WIDTH } from './metric'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  width: ${SIDEBAR_WIDTH};
`
export const Divider = styled.div`
  height: 1px;
  background: #004352;
  width: ${NAVI_CATALOG_WIDTH};
  margin-top: 15px;
  margin-bottom: 15px;
`
export const TopFilter = styled.div`
  color: ${theme('thread.articleDigest')};
  width: ${NAVI_CATALOG_WIDTH};
`
export const Option = styled.div<TActive>`
  ${css.flex('align-center')};
  font-size: 14px;
  padding: 6px;
  background: ${({ active }) => (active ? '#08323e' : 'transparent')};
  border-radius: 6px;
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
export const OptionItem = styled.div`
  flex-grow: 1;
`
const OptionIconBase = styled(Img)<TActive>`
  ${css.size(12)};
  opacity: ${({ active }) => (active ? '1' : '0')};

  transition: all 0.2s;
`
export const FavoriteIcon = styled(OptionIconBase)`
  fill: ${theme('baseColor.red')};
`
export const ClockIcon = styled(OptionIconBase)`
  fill: ${theme('thread.articleTitle')};
`
