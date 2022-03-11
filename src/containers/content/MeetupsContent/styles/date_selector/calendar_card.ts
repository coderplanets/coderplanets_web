import styled from 'styled-components'

import type { TActive } from '@/spec'
// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('justify-start')};
  width: 100px;
  height: 90px;
  color: ${theme('thread.articleDigest')};
  border: 1px solid;
  border-color: #004354;
`
export const SelectorRow = styled.div`
  position: relative;
  ${css.flexColumn('align-end')};
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  background: #08323e;
  border-top: 2px solid;
  border-top-color: #327faf;

  &:before {
    content: '';
    position: absolute;
    width: 3px;
    height: 6px;
    background: #327faf;
    top: -4px;
    left: 25px;
    border-radius: 3px;
  }

  &:after {
    content: '';
    position: absolute;
    width: 3px;
    height: 6px;
    background: #327faf;
    top: -4px;
    right: 25px;
    border-radius: 3px;
  }
`
export const YearWrapper = styled.div`
  ${css.flex()};
  align-items: baseline;
`
export const YearVal = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
  border-bottom: 1px dashed;

  &:hover {
    cursor: pointer;
  }
`
export const YearUnit = styled.div`
  font-size: 14px;
`
export const MonthWrapper = styled.div`
  ${css.flex()};
  align-items: baseline;
  margin-top: 5px;
`
export const MonthVal = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
  border-bottom: 1px dashed;

  &:hover {
    cursor: pointer;
  }
`
export const MonthUnit = styled.div`
  font-size: 14px;
`
export const DatesWrapper = styled.div`
  ${css.flex()}
  flex-wrap: wrap;
  width: 100%;
`
export const WeekName = styled.div`
  ${css.flex('align-both')};
  ${css.size(14)};
  font-size: 13px;
  background: #126682;
  border-radius: 100%;
  color: white;
`
export const DateItem = styled.div<TActive>`
  ${css.flexColumn('justify-between')};
  border: 1px solid;
  border-color: #043a48;
  width: 55px;
  height: 45px;
  padding-left: 3px;
  background: ${({ active }) => (active ? '#05323e' : '')};
`
export const Head = styled.div`
  ${css.flex('justify-between', 'align-center')};
  padding-right: 3px;
`
export const WeekHint = styled.div`
  font-size: 10px;
  margin-right: 2px;
`
export const WeekendHint = styled.div`
  font-size: 9px;
  padding: 0 2px;
  color: #c7c7c7;
  background: #275e82;
  border-radius: 2px;
  margin-top: -1px;
  margin-right: 2px;
`
export const Foot = styled.div`
  ${css.flex()};
  margin-bottom: 5px;
`
