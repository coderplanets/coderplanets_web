import styled from 'styled-components'

// import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  width: 100%;
  margin-bottom: 20px;
  color: ${theme('thread.articleDigest')};
`
export const SelectorRow = styled.div`
  ${cs.flexColumn('align-end')};
  width: 100px;
  height: 100%;
  padding-top: 10px;
  padding-right: 10px;
  background: #043a48;
`
export const YearWrapper = styled.div`
  ${cs.flex()};
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
  ${cs.flex()};
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
  ${cs.flex()}
  flex-wrap: wrap;
  width: 100%;
`
export const WeekName = styled.div`
  width: 14px;
  height: 14px;
  font-size: 13px;
  background: #126682;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
`
export const DateItem = styled.div`
  ${cs.flexColumn('justify-between')};
  border: 1px solid;
  border-color: #043a48;
  width: 50px;
  height: 45px;
  padding-left: 3px;
  background: ${({ active }) => (active ? '#05323e' : '')};
`
export const Head = styled.div`
  ${cs.flex('justify-between')};
  align-items: center;
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
  ${cs.flex()};
  margin-bottom: 5px;
`
