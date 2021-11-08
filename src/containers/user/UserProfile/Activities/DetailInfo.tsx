import { FC, memo } from 'react'

import type { TUserActivity } from '@/spec'

import {
  Wrapper,
  IconWrapper,
  Icon,
  Content,
  Title,
  Digest,
} from '../styles/activities/detail_info'

type TProps = {
  activity: TUserActivity
  first: boolean
}

const DetailInfo: FC<TProps> = ({ activity, first }) => {
  return (
    <Wrapper first={first}>
      <IconWrapper first={first}>
        <Icon />
      </IconWrapper>
      <Content>
        <Title>{activity.articleTitle}</Title>
        <Digest>{activity.digest}</Digest>
      </Content>
    </Wrapper>
  )
}

export default memo(DetailInfo)
