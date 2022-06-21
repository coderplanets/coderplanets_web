import styled from 'styled-components'

import type { TTestable } from '@/spec'

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
