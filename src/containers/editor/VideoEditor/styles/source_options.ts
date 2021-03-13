import styled from 'styled-components'

import { TActive } from '@/types'
import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 5px;
`
export const ItemWrapper = styled.div`
  ${css.flex('align-center')};
  margin-right: 8px;
`
type TTitle = TActive & { nohover: boolean }
export const Title = styled.div<TTitle>`
  color: ${({ active }) =>
    active ? theme('banner.title') : theme('banner.desc')};
  cursor: ${({ nohover }) => (nohover ? '' : 'pointer')};
  font-size: 0.8rem;
`
type TIcon = TActive & { activeColor: string }
export const Icon = styled(Img)<TIcon>`
  fill: ${({ active, activeColor }) =>
    active ? activeColor || theme('banner.title') : theme('banner.desc')};
  ${css.size(16)};
  display: block;
  margin-right: 3px;
`
export const RespectText = styled.div<TActive>`
  color: ${theme('editor.placeholder')};
  display: ${({ show }) => (show ? 'block' : 'none')};
`
export const Divider = styled.div`
  border-top: 1px solid;
  border-color: ${theme('editor.placeholder')};
  margin-top: 10px;
  width: 55%;
  margin-bottom: 20px;
`
export const PublishButtons = styled.div`
  width: 50%;
  text-align: center;
`
