import { FC, memo } from 'react'

import { Br } from '@/widgets/Common'

import { TAB } from './constant'
import type { TTab } from './spec'

import { Wrapper, Folder, Icon, Title, Item } from './styles/sidebar'
import { tabOnChange } from './logic'

type TProps = {
  curTab: TTab
}

const Sidebar: FC<TProps> = ({ curTab }) => {
  return (
    <Wrapper>
      <Folder>
        <Icon.Basic />
        <Title>基础设置</Title>
      </Folder>
      <Item
        $active={TAB.BASIC_INFO === curTab}
        onClick={() => tabOnChange(TAB.BASIC_INFO)}
      >
        关于社区
      </Item>
      <Item $active={TAB.UI === curTab} onClick={() => tabOnChange(TAB.UI)}>
        外观样式
      </Item>
      <Item
        $active={TAB.THREADS === curTab}
        onClick={() => tabOnChange(TAB.THREADS)}
      >
        社区板块
      </Item>
      <Item
        $active={TAB.ADMINS === curTab}
        onClick={() => tabOnChange(TAB.ADMINS)}
      >
        管理员
      </Item>

      <Br top={30} />
      <Folder>
        <Icon.Analysis />
        <Title>统计分析</Title>
      </Folder>
      <Item>--</Item>
      <Br top={30} />
      <Folder>
        <Icon.Management />
        <Title>内容管理</Title>
      </Folder>
      <Item $active={TAB.TAGS === curTab} onClick={() => tabOnChange(TAB.TAGS)}>
        标签
      </Item>
      <Item $active={TAB.POST === curTab} onClick={() => tabOnChange(TAB.POST)}>
        帖子
      </Item>
      <Item
        $active={TAB.KANBAN === curTab}
        onClick={() => tabOnChange(TAB.KANBAN)}
      >
        看板
      </Item>
      <Item
        $active={TAB.CHANGELOG === curTab}
        onClick={() => tabOnChange(TAB.CHANGELOG)}
      >
        更新日志
      </Item>
      <Item $active={TAB.HELP === curTab} onClick={() => tabOnChange(TAB.HELP)}>
        帮助台
      </Item>
      <Item
        $active={TAB.BLACKHOUSE === curTab}
        onClick={() => tabOnChange(TAB.BLACKHOUSE)}
      >
        小黑屋
      </Item>
      <Br top={30} />
      <Folder>
        <Icon.Bind />
        <Title>绑定集成</Title>
      </Folder>
      <Item
        $active={TAB.DOMAIN === curTab}
        onClick={() => tabOnChange(TAB.DOMAIN)}
      >
        域名
      </Item>
      <Item
        $active={TAB.THIRD_PART === curTab}
        onClick={() => tabOnChange(TAB.THIRD_PART)}
      >
        外部应用
      </Item>
      <Item
        $active={TAB.WIDGETS === curTab}
        onClick={() => tabOnChange(TAB.WIDGETS)}
      >
        网站组件
      </Item>
    </Wrapper>
  )
}

export default memo(Sidebar)
