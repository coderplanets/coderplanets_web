import { FC } from 'react'
import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

import { getLocalSVG } from '@/icons'

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
  padding: 2px;
  border-radius: 5px;
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
  ${css.size(25)};
  ${css.flex('align-both')};
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
  fill: ${theme('thread.extraInfo')};
  ${({ checked }) => (checked ? css.size(14) : css.size(12))};
  transition: all 0.2s;

  &:hover {
    fill: ${theme('thread.extraInfo')};
  }
`

const styledIcon = (comp: FC): FC<TActive> => {
  return styled(comp)<TActive>`
    fill: ${theme('thread.extraInfo')};
    ${({ $active }) => ($active ? css.size(14) : css.size(12))};
    transition: all 0.2s;

    &:hover {
      fill: ${theme('thread.extraInfo')};
    }

    transition: all 0.2s;
  `
}

export const getLocalIcon = (type: string): FC<TActive> => {
  return getLocalSVG(type, styledIcon)
}

export const Slider = styled.span<{ index: number }>`
  ${css.flex()};
  position: absolute;
  background-color: #fff; // to-theme
  ${css.size(25)};
  z-index: 0;
  border-radius: 4px;

  ${Wrapper}:hover & {
    background-color: #fff; // to-theme
  }
  ${AccessZone}:hover & {
    background-color: #fff; // to-theme
  }

  transition: 0.25s ease-out;
  transform: ${({ index }) => `translateX(${index * 100}%)`};
`
