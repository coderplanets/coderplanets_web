import { FC, memo } from 'react'

import type { TUserActivity } from '@/spec'
import EventBlock from './EventBlock'

import { Wrapper, Title, EmptyHint, Divider } from '../styles/activities'

type TProps = {
  items: TUserActivity[]
}

const Activities: FC<TProps> = ({ items }) => {
  if (items.length === 0) return <EmptyHint>暂无动态</EmptyHint>

  return (
    <Wrapper>
      <Title>最新动态</Title>
      <Divider />
      {items.map((activity, index) => (
        <EventBlock key={activity.id} activity={activity} first={index === 0} />
      ))}
    </Wrapper>
  )
}

export default memo(Activities)
