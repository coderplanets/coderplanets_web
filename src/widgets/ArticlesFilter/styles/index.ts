import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

import Img from '@/Img'
import Input from '@/widgets/Input'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;
  margin-bottom: 8px;
`
export const Inputer = styled(Input)`
  height: 30px;
`
export const MainFilterWrapper = styled.div`
  ${css.flex('align-center')};
  padding-left: 2px;
`
export const FilterPanelWrapper = styled.div`
  ${css.flex()};
  min-width: 120px;
  padding: 6px;
`
export const CatPanelWrapper = styled(FilterPanelWrapper)`
  justify-content: flex-end;
`
export const ColumnWrapper = styled.div`
  ${css.flexColumn('align-center')};
  min-width: 60px;
  margin-right: 22px;
`
export const CatColumnWrapper = styled.div`
  ${css.flexColumn('align-end')};
  width: 100%;
  margin-right: 0;
`
export const SelectLabel = styled.div`
  ${css.flex('align-center')};
`
export const LabelDivider = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme('banner.desc')};
  width: 90%;
  margin-top: 5px;
  margin-bottom: 10px;
  opacity: 0.3;
`
export const SelectIcon = styled(Img)<{ reverse?: boolean }>`
  fill: ${theme('banner.title')};
  ${css.size(15)};
  margin-right: 3px;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
`
export const SelectTitle = styled.div`
  color: ${theme('banner.title')};
  font-size: 14px;
  font-weight: bold;
`
export const LeftAlignWrapper = styled.div<{ offset: string }>`
  text-align: left;
  margin-left: ${({ offset }) => offset || 0};
`
export const SelectItem = styled.div<TActive>`
  font-size: 14px;
  text-align: right;
  padding: 5px 6px;
  width: 100%;
  border-radius: 3px;
  margin-bottom: 5px;
  background-color: ${({ active }) =>
    active ? theme('textBadge') : 'transparent'}; // to-theme
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-weight: ${({ active }) => (active ? 600 : 450)};
  position: relative;

  &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
    background-color: #f8f8f8;
  }

  &:before {
    content: '*';
    color: ${theme('banner.title')};
    opacity: ${({ active }) => (active ? 1 : 0)};
    font-weight: lighter;
    position: absolute;
    left: -10px;
    top: 2px;
  }
`
