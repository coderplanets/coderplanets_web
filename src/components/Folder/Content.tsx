import { FC, memo } from 'react'
import TimeAgo from 'timeago-react'

import { ICON } from '@/config'

import { Wrapper, Info, Total, Unit, Text, LockIcon } from './styles/content'

type TProps = {
  total?: number
  updatedAt?: string
  lock?: boolean
}

const Content: FC<TProps> = ({ total, updatedAt, lock }) => {
  return (
    <Wrapper>
      {lock && <LockIcon src={`${ICON}/shape/lock.svg`} />}
      <Info>
        <Total>
          {total} <Unit>项</Unit>
        </Total>
        <Text>
          <TimeAgo datetime={updatedAt} locale="zh_CN" />
        </Text>
      </Info>
    </Wrapper>
  )
}

export default memo(Content)
