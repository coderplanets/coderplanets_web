import React from 'react'

import { Wrapper, Item } from './styles/article_options'
import * as logic from './logic'

const ArticleOptions = () => (
  <Wrapper>
    <Item onClick={logic.onEdit}>编辑文章</Item>
    <Item>删除文章</Item>
    <Item>置为精华</Item>
    <Item>举报文章</Item>
  </Wrapper>
)

export default ArticleOptions
