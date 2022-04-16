import { FC, memo, Fragment } from 'react'

import { Space } from '@/widgets/Common'
import { Wrapper } from './styles/absolute_fmt'

const calcRange = (hours) => {
  if (hours >= 0 && hours <= 6) return '凌晨'

  return hours > 12 ? '下午' : '上午'
}

type TProps = {
  datetime: string
  className: string
  withTime: boolean
}

const AbsoluteFmt: FC<TProps> = ({ datetime, className, withTime }) => {
  const DateObj = new Date(datetime)

  const year = DateObj.getFullYear()
  const month = DateObj.getMonth() + 1
  const day = DateObj.getDate()
  const hours = DateObj.getHours()
  const range = calcRange(hours)
  const hour = hours > 12 ? hours - 12 : hours

  return (
    <Wrapper className={className}>
      {year}
      <Space right={3} />年
      <Space right={3} />
      {month}
      <Space right={3} />月
      <Space right={3} />
      {day}
      <Space right={3} />日
      {withTime && (
        <Fragment>
          <Space right={2} />
          {range}
          <Space right={2} />
          {hour}
          <Space right={3} />点
        </Fragment>
      )}
    </Wrapper>
  )
}

export default memo(AbsoluteFmt)
