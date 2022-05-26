import { FC, memo, Fragment } from 'react'

import {
  Wrapper,
  ViewsIcon,
  HighlightWrapper,
} from '../../styles/comment_fist_layout/desktop_view/views_count'

type TProps = {
  count: number
}

const ViewsCount: FC<TProps> = ({ count }) => {
  return (
    <Fragment>
      {count >= 100 ? (
        <HighlightWrapper>
          <ViewsIcon highlight />
          {count}
        </HighlightWrapper>
      ) : (
        <Wrapper>
          <ViewsIcon />
          {count}
        </Wrapper>
      )}
    </Fragment>
  )
}

export default memo(ViewsCount)
