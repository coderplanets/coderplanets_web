import React from 'react'

import { ICON_ASSETS } from '../../config'

import { Wrapper, Item, ItemIcon, ItemTitle } from './styles/article_options'
import * as logic from './logic'

const ArticleOptions = () => (
  <Wrapper>
    <Item onClick={logic.onEdit}>
      <ItemIcon src={`${ICON_ASSETS}/cmd/edit.svg`} />
      <ItemTitle>编辑文章</ItemTitle>
    </Item>
    <Item>
      <ItemIcon src={`${ICON_ASSETS}/cmd/diamond.svg`} />
      <ItemTitle>置为精华</ItemTitle>
    </Item>
    <Item>
      <ItemIcon src={`${ICON_ASSETS}/cmd/flag.svg`} />
      <ItemTitle>举报文章</ItemTitle>
    </Item>
    <Item red>
      <ItemIcon src={`${ICON_ASSETS}/cmd/delete.svg`} red />
      <ItemTitle>删除文章</ItemTitle>
    </Item>
  </Wrapper>
)

export default ArticleOptions
