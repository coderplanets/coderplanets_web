import React from 'react'

import { Wrapper, FloorNum, Total } from './styles/comments_count'

const CommentCount = ({ floor, total }) => (
  <Wrapper>
    <FloorNum>#{floor}</FloorNum>/<Total>{total}</Total>
  </Wrapper>
)

export default CommentCount
