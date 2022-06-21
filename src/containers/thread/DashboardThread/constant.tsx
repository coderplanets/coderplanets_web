import type { SnakeUpperCase } from '@/spec'

import type { TTab, TSettingField } from './spec'

import { Icon } from './styles/side_menu'

export const TAB = {
  OVERVIEW: 'overview',
  // basic-info
  BASIC_INFO: 'basic_info',
  UI: 'ui',
  THREADS: 'threads',
  ALIAS: 'alias',
  DOMAIN: 'domain',
  // analysis
  // --
  // contents
  TAGS: 'tags',
  POST: 'post',
  KANBAN: 'kanban',
  CHANGELOG: 'changelog',
  HELP: 'help',
  BLACKHOUSE: 'blackhouse',
  // integrates
  THIRD_PART: 'third_part',
  ADMINS: 'admins',
  WIDGETS: 'widgets',
} as Record<Uppercase<TTab>, TTab>

export const SETTING_FIELD = {
  PRIMARY_COLOR: 'primaryColor',
  POST_LAYOUT: 'postLayout',
  BANNER_LAYOUT: 'bannerLayout',
  CHANGELOG_LAYOUT: 'changelogLayout',
  TAG: 'tag',
} as Record<SnakeUpperCase<TSettingField>, TSettingField>

export const MENU = {
  BASIC: {
    title: '基础设置',
    icon: <Icon.Basic />,
    children: [
      {
        title: '关于社区',
        raw: TAB.BASIC_INFO,
      },
      {
        title: '外观布局',
        raw: TAB.UI,
      },
      {
        title: '社区板块',
        raw: TAB.THREADS,
      },
      {
        title: '别名',
        raw: TAB.ALIAS,
      },
      {
        title: '管理员',
        raw: TAB.ADMINS,
      },
    ],
  },
  ANALYSIS: {
    title: '统计分析',
    icon: <Icon.Analysis />,
    children: [],
  },
  MANAGEMENT: {
    title: '内容管理',
    icon: <Icon.Management />,
    children: [
      {
        title: '标签',
        raw: TAB.TAGS,
      },
      {
        title: '帖子',
        raw: TAB.POST,
      },
      {
        title: '看板',
        raw: TAB.KANBAN,
      },
      {
        title: '更新日志',
        raw: TAB.CHANGELOG,
      },
      {
        title: '帮助台',
        raw: TAB.HELP,
      },
      {
        title: '小黑屋',
        raw: TAB.BLACKHOUSE,
      },
    ],
  },

  INTEGRATE: {
    title: '绑定即成',
    icon: <Icon.Bind />,
    children: [
      {
        title: '域名',
        raw: TAB.DOMAIN,
      },
      {
        title: '外部应用',
        raw: TAB.THIRD_PART,
      },
      {
        title: '网站组件',
        raw: TAB.WIDGETS,
      },
    ],
  },
}