import { FC, memo } from 'react'

import type { TUserActivity } from '@/spec'

import BriefInfo from './BriefInfo'
import DetailInfo from './DetailInfo'

import { Wrapper } from '../styles/activities/event_block'

type TProps = {
  activity: TUserActivity
  first: boolean
}

const EventBlock: FC<TProps> = ({ activity, first }) => {
  return (
    <Wrapper>
      <BriefInfo activity={activity} first={first} />
      <DetailInfo activity={activity} first={first} />
    </Wrapper>
  )
}

export default memo(EventBlock)
