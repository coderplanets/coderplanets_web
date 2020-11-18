import React from 'react'

import { Space } from '@/components/Common'
import { Wrapper } from '../styles/desktop_view/publish_date'

const calcRange = (hours) => {
  if (hours >= 0 && hours <= 6) return '凌晨'

  return hours >= 12 ? '下午' : '上午'
}

const PublishDate = ({ insertedAt }) => {
  const DateObj = new Date(insertedAt)
  const [month, date, year] = DateObj.toLocaleDateString().split('/')

  const hours = DateObj.getHours()
  const range = calcRange(hours)
  const hour = hours >= 12 ? hours - 12 : hours

  return (
    <Wrapper>
      {month}
      <Space right={3} />月
      <Space right={3} />
      {date}
      <Space right={3} />日
      <Space right={2} />
      {range}
      <Space right={2} />
      {hour}
      <Space right={3} />
      点，{year}
      <Space right={1} />年
    </Wrapper>
  )
}

export default PublishDate
