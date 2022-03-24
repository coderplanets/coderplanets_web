import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

const width = '28px'
const height = '25px'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
  position: relative;
`
export const AccessZone = styled.div`
  position: absolute;
  height: 30px;
  width: 100px;
  top: -30px;
  left: 0;
`
export const Tabs = styled.div`
  ${css.flex()};
  position: relative;
  padding: 3px 5px;
  border-radius: 6px;
  z-index: 2;
  border: 1px solid;
  border-color: transparent;
  background-color: ${theme('textBadge')}; // to-theme

  ${Wrapper}:hover & {
    border-color: ${theme('textBadge')}; // to-theme
  }
  ${AccessZone}:hover & {
    border-color: ${theme('textBadge')}; // to-theme
  }
  transition: all 0.2s;
`
export const Label = styled.label`
  ${css.flex('align-both')};
  width: ${width};
  height: ${height};
  font-size: 15px;
  transition: color 0.15s ease-in;

  &:hover {
    cursor: pointer;
  }
`
export const DescText = styled.div`
  ${css.flex('align-both')};
  color: ${theme('thread.articleTitle')};
  min-width: 90px;
  padding: 5px 10px;
`
export const Icon = styled(Img)<{ checked: boolean }>`
  fill: ${({ checked }) =>
    checked ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  width: ${({ checked }) => (checked ? '14px' : '12px')};
  height: ${({ checked }) => (checked ? '14px' : '12px')};
  display: block;
  transition: all 0.2s;

  &:hover {
    fill: #66b5e8;
  }
`
export const Slider = styled.span<{ index: number }>`
  ${css.flex()};
  position: absolute;
  width: ${width};
  height: ${height};
  background-color: #fff; // to-theme
  z-index: 0;
  border-radius: 6px;

  ${Wrapper}:hover & {
    background-color: #fff; // to-theme
  }
  ${AccessZone}:hover & {
    background-color: #fff; // to-theme
  }

  transition: 0.25s ease-out;
  transform: ${({ index }) => `translateX(${index * 100}%)`};
`
