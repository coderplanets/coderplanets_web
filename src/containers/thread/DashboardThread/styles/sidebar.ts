import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'

import InfoSVG from '@/icons/Info'
import PulseSVG from '@/icons/Pulse'
import ManagementSVG from '@/icons/Management'
import BindSVG from '@/icons/Bind'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn()};
  width: 154px;
  min-width: 154px;
  color: ${theme('thread.articleDigest')};
  padding-top: 32px;
  padding-left: 25px;
`
export const Folder = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 13px;
`
const BasicIcon = styled(InfoSVG)`
  ${css.size(15)};
  fill: ${theme('thread.articleDigest')};
  opacity: 0.8;
`
const PulseIcon = styled(PulseSVG)`
  ${css.size(15)};
  fill: ${theme('thread.articleDigest')};
  opacity: 0.8;
`
const ManagementIcon = styled(ManagementSVG)`
  ${css.size(18)};
  fill: ${theme('thread.articleDigest')};
  opacity: 0.8;
  margin-left: -2px;
`
const BindIcon = styled(BindSVG)`
  ${css.size(15)};
  fill: ${theme('thread.articleDigest')};
  opacity: 0.8;
`

export const Icon = {
  Basic: BasicIcon,
  Analysis: PulseIcon,
  Management: ManagementIcon,
  Bind: BindIcon,
}

export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  margin-left: 12px;
  font-weight: 500;
`

export const Item = styled.div<TActive>`
  position: relative;
  color: ${({ $active }) =>
    $active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  background: ${({ $active }) => ($active ? theme('hoverBg') : 'transparent')};
  font-weight: ${({ $active }) => ($active ? 500 : 400)};
  padding: 3px 5px;
  padding-left: 26px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 2px;
  /* margin-left: 24px; */

  &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
    background: ${theme('hoverBg')};
  }

  transition: all 0.2s;
`
