import styled from 'styled-components'

import Img from 'components/Img'
import { cs } from 'utils'
import { BaseBanner, BaseBannerContent } from './index'

export const BannerContainer = styled(BaseBanner)``
export const BannerContentWrapper = styled(BaseBannerContent)``

export const MonthWrapper = styled.div`
  ${cs.flexColumn('align-center')};
  color: #56868a;
`

export const MonthNumber = styled.div`
  font-size: 1.8em;
`

export const UpIcon = styled(Img)`
  fill: #6b8688;
  width: 30px;
  height: 30px;
  ${cs.smokey};
`
export const DaysWrapper = styled.div`
  ${cs.flex('align-center')};
  margin-left: 20px;
`

export const DayBlock = styled.div`
  margin-right: ${({ day }) => (day % 5 === 0 ? '10px' : '5px')};
  background: ${({ day }) => (day % 5 === 0 ? 'white' : '')};
  font-size: ${({ day }) => (day % 5 === 0 ? '1.6em' : '0.9em')};
  position: relative;
  align-self: center;
  border: 1px solid lightgrey;
  padding: 0 5px;
  border-radius: 100%;

  &:hover {
    background: white;
    cursor: pointer;
  }
`

export const DayWeek = styled.div`
  position: absolute;
  width: 50px;
  top: -30px;
  left: -5px;
  font-size: 0.8em;
  color: #95acad;
  display: ${({ day }) => (day % 5 === 0 ? 'block' : 'none')};

  ${DayBlock}:hover & {
    display: block;
  }
`

export const DayNumber = styled.div`
  color: #95acad;
`
