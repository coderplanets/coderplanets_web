import { FC, memo, Fragment } from 'react'

import { TSIZE_SM } from '@/spec'
import { SIZE } from '@/constant'

import { Space } from '@/widgets/Common'

import {
  Wrapper,
  CommentsIcon,
  HighlightWrapper,
} from './styles/comments_count'

type TProps = {
  count: number
  size?: TSIZE_SM
}

const CommentsCount: FC<TProps> = ({ count, size = SIZE.SMALL }) => {
  return (
    <Fragment>
      {count >= 25 ? (
        <HighlightWrapper>
          <CommentsIcon highlight />
          {size === SIZE.MEDIUM && <Space right={2} />}
          {count}
        </HighlightWrapper>
      ) : (
        <Wrapper>
          <CommentsIcon />
          {size === SIZE.MEDIUM && <Space right={2} />}
          {count}
        </Wrapper>
      )}
    </Fragment>
  )
}

export default memo(CommentsCount)
