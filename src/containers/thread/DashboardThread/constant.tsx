import type { SnakeUpperCase } from '@/spec'

import type { TTab, TSettingField, TWidgetType } from './spec'

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
  BRAND_LAYOUT: 'brandLayout',
  BANNER_LAYOUT: 'bannerLayout',
  BANNER_NOTIFY_LAYOUT: 'bannerNotifyLayout',
  BANNER_NOTIFY_BG: 'bannerNotifyBg',
  CHANGELOG_LAYOUT: 'changelogLayout',
  TAG: 'tag',
  ALIAS: 'alias',
  WIDGETS_PRIMARY_COLOR: 'widgetsPrimaryColor',
  WIDGETS_SIZE: 'widgetsSize',
  WIDGETS_THREADS: 'widgetsThreads',
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
    title: '绑定集成',
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
        title: '网站插件',
        raw: TAB.WIDGETS,
      },
    ],
  },
}

export const BUILDIN_ALIAS = [
  {
    raw: 'posts',
    name: '讨论',
    original: '讨论',
    suggestions: ['帖子', '讨论区', '论坛'],
  },
  {
    raw: 'changelog',
    name: '更新日志',
    original: '更新日志',
    suggestions: ['新功能', '发布日志', '里程碑'],
  },
  {
    raw: 'kanban',
    name: '看板',
    original: '看板',
    suggestions: ['路线图', '规划', '蓝图'],
  },
]

export const WIDGET_TYPE = {
  SIDEBAR: 'sidebar',
  MODAL: 'modal',
  POPUP: 'popup',
  IFRAME: 'iframe',
  LINK: 'link',
} as Record<Uppercase<TWidgetType>, TWidgetType>

export const WIDGET_TYPES = [
  {
    title: '侧边栏',
    raw: WIDGET_TYPE.SIDEBAR,
  },
  {
    title: '居中模态框',
    raw: WIDGET_TYPE.MODAL,
  },
  {
    title: '弹出提示',
    raw: WIDGET_TYPE.POPUP,
  },
  {
    title: '页面内嵌',
    raw: WIDGET_TYPE.IFRAME,
  },
  {
    title: '链接',
    raw: WIDGET_TYPE.LINK,
  },
]
