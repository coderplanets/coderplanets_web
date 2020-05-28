import styled from 'styled-components'

// import Img from '@/Img'
import { cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('justify-between')};
  border: 1px solid;
  border-color: #004354;
  width: ${({ isLeapMonth }) => (isLeapMonth ? '50px' : '55px')};
  height: 45px;
  padding-left: 3px;
  background: ${({ active }) => (active ? '#003b4c' : '#04303c')};
  border-top-color: ${({ active }) => (active ? '#3680AD' : '#004354')};
  @media (max-width: 1255px) {
    width: 50px;
  }
`
export const WeekName = styled.div`
  ${cs.flex('align-both')};
  width: 14px;
  height: 14px;
  font-size: 13px;
  background: #126682;
  border-radius: 100%;
  color: white;
`
export const Head = styled.div`
  ${cs.flex('align-center', 'justify-between')};
  padding-right: 3px;
`
export const DateText = styled.div`
  color: ${({ active }) => (active ? '#27908f' : '')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
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
