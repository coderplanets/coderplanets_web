import { FC, memo, Fragment } from 'react'

import type { TSizeSM } from '@/spec'
import { SIZE } from '@/constant'

import { Space } from '@/widgets/Common'

import {
  Wrapper,
  CommentsIcon,
  HighlightWrapper,
} from './styles/comments_count'

type TProps = {
  count: number
  size?: TSizeSM
}

const CommentsCount: FC<TProps> = ({ count, size = SIZE.SMALL }) => {
  return (
    <Fragment>
      {count >= 100 ? (
        <HighlightWrapper size={size}>
          <CommentsIcon highlight />
          {size === SIZE.MEDIUM && <Space right={2} />}
          {count}
        </HighlightWrapper>
      ) : (
        <Wrapper size={size}>
          <CommentsIcon />
          {size === SIZE.MEDIUM && <Space right={2} />}
          {count}
        </Wrapper>
      )}
    </Fragment>
  )
}

export default memo(CommentsCount)
