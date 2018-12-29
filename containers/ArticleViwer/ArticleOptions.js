import React from 'react'

import { ICON_CMD } from '../../config'
import Informer from '../Informer'

import { Wrapper, Item, ItemIcon, ItemTitle } from './styles/article_options'
import * as logic from './logic'

const ArticleOptions = ({ thread, data }) => (
  <Wrapper>
    {data.pin ? (
      <Item onClick={logic.onUnDoPin.bind(this, thread)}>
        <ItemIcon src={`${ICON_CMD}/pin.svg`} reverse />
        <ItemTitle>取消置顶</ItemTitle>
      </Item>
    ) : (
      <Item onClick={logic.onPin.bind(this, thread)}>
        <ItemIcon src={`${ICON_CMD}/pin.svg`} />
        <ItemTitle>置顶文章</ItemTitle>
      </Item>
    )}
    <Item onClick={logic.onEdit.bind(this, thread)}>
      <ItemIcon src={`${ICON_CMD}/edit.svg`} />
      <ItemTitle>编辑文章</ItemTitle>
    </Item>
    {/*
        <Item>
        <ItemIcon src={`${ICON_CMD}/diamond.svg`} />
        <ItemTitle>置为精华</ItemTitle>
        </Item>
      */}
    <Informer>
      <Item onClick={logic.callInformer}>
        <ItemIcon src={`${ICON_CMD}/flag.svg`} />
        <ItemTitle>举报文章</ItemTitle>
      </Item>
    </Informer>
    <Item red>
      <ItemIcon src={`${ICON_CMD}/delete.svg`} red />
      <ItemTitle>删除文章</ItemTitle>
    </Item>
  </Wrapper>
)

export default ArticleOptions
