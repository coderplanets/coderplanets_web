/*
 *
 * Sidebar
 *
 */

import React from 'react'

import { SpaceGrow } from '@components/BaseStyled'
import { Wrapper, Item, ActiveDot } from './styles/sidebar'

const Sidebar = () => {
  return (
    <Wrapper>
      <Item active>
        <ActiveDot />
        <SpaceGrow />
        今日热议
      </Item>
      <Item>Github 国区</Item>
      <Item>播客</Item>
      <Item>代码技巧</Item>
      <Item>翻译文章</Item>
      <Item>技术书籍</Item>
      <Item>计算机名人堂</Item>
      <Item>独立博客</Item>
      <Item>独立开发者</Item>
      <Item>编辑器圣战</Item>
      <Item>命令行</Item>
      <Item>酷社区</Item>
      <Item>酷团队</Item>
      <Item>客户端</Item>
      <Item>值得订阅</Item>
      <Item>中文文档</Item>
      <Item>影/剧/纪录片</Item>
      <Item>研究报告</Item>
      <Item>文体圈</Item>
    </Wrapper>
  )
}

export default Sidebar
