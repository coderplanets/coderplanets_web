import styled from 'styled-components'

import { GALLERY } from '@/constant'
import { css } from '@/utils'

export const Wrapper = styled.div<{ type: string }>`
  ${css.flexColumn()};
  align-items: ${({ type }) =>
    type === GALLERY.TEXT_WITH_IMAGE ? 'flex-end' : 'center'};
  width: ${({ type }) => (type === GALLERY.TEXT_WITH_IMAGE ? '50px' : '70px')};
  margin-right: ${({ type }) =>
    type === GALLERY.TEXT_WITH_IMAGE ? '2px' : '5px'};
  margin-top: ${({ type }) =>
    type === GALLERY.TEXT_WITH_IMAGE ? '-2px' : '0'};
`
export const Divider = styled.div<{ type: string }>`
  height: 1px;
  width: ${({ type }) => (type === GALLERY.TEXT_WITH_IMAGE ? '26px' : '40%')};
  background: #054252;
  margin-top: ${({ type }) =>
    type === GALLERY.TEXT_WITH_IMAGE ? '4px' : '5px'};
  margin-bottom: ${({ type }) =>
    type === GALLERY.TEXT_WITH_IMAGE ? '2px' : '5px'};
`
export const WeekName = styled.div`
  font-size: 13px;
`
export const DateNum = styled.div<{ size: string }>`
  font-size: ${({ size }) => (size === 'default' ? '13px' : '11px')};
`
