import { FC, memo } from 'react'

import type { TUserActivity } from '@/spec'

import {
  Wrapper,
  DateInfo,
  DayNum,
  MonthNum,
  Divider,
  Desc,
} from '../styles/activities/brief_info'

type TProps = {
  activity: TUserActivity
  first: boolean
}

const BriefInfo: FC<TProps> = ({ activity, first }) => {
  const date = new Date(activity.insertedAt)
  const month = date.getMonth() + 1
  const day = date.getDate()

  return (
    <Wrapper first={first}>
      <DateInfo>
        <DayNum>{day}</DayNum>
        <Divider>/</Divider>
        <MonthNum>{month}月</MonthNum>
      </DateInfo>
      <Desc>发布帖子</Desc>
    </Wrapper>
  )
}

export default memo(BriefInfo)
