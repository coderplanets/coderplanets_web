import type { TUser, TTag, TCommunity, TFilterTag, TNaviTag } from '@/spec'
import { SITE_LOGO, ICON, ICON_BASE, ICON_CMD, ASSETS_ENDPOINT } from '@/config'

import { getRandomInt } from './helper'

const users = [
  {
    id: '1',
    avatar:
      'https://avatars.githubusercontent.com/u/3684889?s=88&u=bb5e8d9294af17219316997ff11d349755ac9740&v=4',
    nickname: 'neSpecc',
    login: 'neSpecc',
    bio: 'the codex core teamf',
  },
  {
    id: '2',
    avatar: 'https://avatars.githubusercontent.com/u/53274?s=64&v=4',
    nickname: 'scrogson',
    login: 'scrogson',
    bio: 'Software Engineer specializing in Erlang/Elixir/Rust',
  },
  {
    id: '3',
    avatar: 'https://avatars.githubusercontent.com/u/52195?s=64&v=4',
    nickname: 'mcollina',
    login: 'mcollina',
    bio: 'Technical Director @nearform, TSC member',
  },
  {
    id: '4',
    avatar: 'https://avatars.githubusercontent.com/u/665846?s=64&v=4',
    nickname: 'Alex Rodionov',
    login: 'Alex Rodionov',
    bio: 'Selenium Committer, Watir Core Team Developer',
  },
  {
    id: '5',
    avatar: 'https://avatars.githubusercontent.com/u/1361891?s=64&v=4',
    nickname: 'huan',
    login: 'huan',
    bio: 'Angel Investor, Serial Entrepreneur, Machine Learning PhD Student',
  },
  {
    id: '6',
    avatar: 'https://avatars.githubusercontent.com/u/70602?v=4',
    nickname: 'Joshua Gross',
    login: 'JoshuaGross',
    bio: 'React Native Core team @ Facebook',
  },
  {
    id: '7',
    avatar: 'https://avatars.githubusercontent.com/u/381213?s=64&v=4',
    nickname: 'philss',
    login: 'philss',
    bio: 'Software developer. Interested in Elixir and functional programming ',
  },
]

const tags = [
  {
    id: '0',
    raw: 'help',
    title: '求助',
    color: 'red',
    group: '技术与人文',
  },
  {
    id: '1',
    raw: 'tech',
    title: '技术',
    color: 'orange',
    group: '技术与人文',
  },
  {
    id: '2',
    raw: 'maker',
    title: '创作者',
    color: 'yellow',
    group: '技术与人文',
  },
  {
    id: '3',
    raw: 'geek',
    title: '极客',
    color: 'green',
    group: '技术与人文',
  },
  {
    id: '4',
    raw: 'IxD',
    title: '交互设计',
    color: 'cyan',
    group: '技术与人文',
  },
  {
    id: '5',
    raw: 'DF',
    title: '黑暗森林',
    color: 'blue',
    group: '技术与人文',
  },
  {
    id: '9',
    raw: 'thoughts',
    title: '迷思',
    color: 'grey',
    group: '技术与人文',
  },
  {
    id: '8',
    raw: 'city',
    title: '城市',
    color: 'green',
    group: '生活与职场',
  },
  {
    id: '6',
    raw: 'pantry',
    title: '茶水间',
    color: 'purple',
    group: '生活与职场',
  },
  {
    id: '7',
    raw: 'afterwork',
    title: '下班后',
    color: 'pink',
    group: '生活与职场',
  },
  {
    id: '10',
    index: 10,
    raw: 'WTF',
    title: '吐槽',
    color: 'red',
    group: '其他',
  },
  {
    id: '11',
    raw: 'REC',
    title: '推荐',
    color: 'orange',
    group: '其他',
  },
  {
    id: '12',
    raw: 'idea',
    title: '脑洞',
    color: 'yellow',
    group: '其他',
  },
  {
    id: '13',
    raw: 'feedback',
    title: '站务',
    color: 'green',
    group: '其他',
  },
]

const communities = [
  {
    id: '0',
    title: 'CoderPlanets',
    raw: 'home',
    desc: '可能是最性感的开发者社区',
    logo: SITE_LOGO,
  },
  {
    id: '1',
    title: '黑洞',
    raw: 'blackhole',
    desc: '吞噬一切不适合在本站出现的内容和账号',
    logo: `${ICON}/shape/blackhole.jpeg`,
  },
  {
    id: '2',
    title: 'React',
    raw: 'react',
    desc: '一个为数据提供渲染为HTML视图的开源JavaScript 库',
    logo: `${ICON_BASE}/framework/react.png`,
  },
  {
    id: '3',
    title: 'Elixir',
    raw: 'elixir',
    desc: 'Elixir 是一个基于 Erlang 虚拟机的函数式、面向并行的通用编程语言',
    logo: `${ICON_BASE}/pl/elixir.png`,
  },
  {
    id: '4',
    title: 'JavaScript',
    raw: 'javascript',
    desc: 'JavaScript is very cool',
    logo: `${ICON_BASE}/pl/javascript.png`,
  },
  {
    id: '5',
    title: 'Ruby',
    raw: 'ruby',
    desc: 'Ruby is very cool',
    logo: `${ICON_BASE}/pl/ruby.png`,
  },
  {
    id: '6',
    title: 'PHP',
    raw: 'php',
    desc: 'PHP is very cool',
    logo: `${ICON_BASE}/pl/php.png`,
  },
]

const images = [
  'https://rmt.dogedoge.com/fetch/~/source/unsplash/photo-1557555187-23d685287bc3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80',
  'https://rmt.dogedoge.com/fetch/~/source/unsplash/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80',
  'https://rmt.dogedoge.com/fetch/~/source/unsplash/photo-1617419086540-518c5b847b88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
  'https://rmt.dogedoge.com/fetch/~/source/unsplash/photo-1617365564200-c6b079284290?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  'https://rmt.dogedoge.com/fetch/~/source/unsplash/photo-1617391765934-f7ac7aa648bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=642&q=80',
  'https://rmt.dogedoge.com/fetch/~/source/unsplash/photo-1611095973362-88e8e2557e58?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
]

export const mockImage = (): string => {
  return images[getRandomInt(0, 4)]
}

export const mockImages = (num: number): string[] => {
  return images.slice(0, Math.min(num, images.length - 1))
}

export const mockUsers = (num: number): TUser[] => {
  return users.slice(0, Math.min(num, users.length - 1))
}

export const mockTags = (num: number): TTag[] =>
  tags.slice(0, Math.min(num, tags.length))

export const mockCommunities = (num: number): TCommunity[] =>
  communities.slice(0, Math.min(num, communities.length))

export const mockFilterMenuTags = (): TFilterTag[] => {
  return [
    {
      id: '1',
      raw: 'beijing',
      title: '北京',
      group: '城市',
    },
    {
      id: '2',
      raw: 'yangtze-river-delta',
      title: '长三角',
      group: '城市',
    },
    {
      id: '3',
      raw: 'pearl-river-delta',
      title: '珠三角',
      group: '城市',
    },
    {
      id: '4',
      raw: 'wuhan',
      title: '武汉',
      group: '城市',
    },
    {
      id: '5',
      raw: 'chengdu',
      title: '成都',
      group: '城市',
    },
    {
      id: '6',
      raw: 'xiamen',
      title: '厦门',
      group: '城市',
    },
    {
      id: '7',
      raw: 'oversea',
      title: '海外',
      group: '城市',
    },
    {
      id: '8',
      raw: 'remote',
      title: '远程',
      group: '城市',
    },
    {
      id: '9',
      raw: 'others',
      title: '其他',
      group: '城市',
    },
    //
    {
      id: '10',
      raw: 'web',
      title: 'web 前端',
      group: '职位',
    },
    {
      id: '11',
      raw: 'backend',
      title: '后端开发',
      group: '职位',
    },
    {
      id: '12',
      raw: 'mobile',
      title: '移动端',
      group: '职位',
    },
    {
      id: '13',
      raw: 'ai',
      title: '人工智能',
      group: '职位',
    },
    {
      id: '14',
      raw: 'devops',
      title: '运维',
      group: '职位',
    },
    {
      id: '15',
      raw: 'securty',
      title: '安全',
      group: '职位',
    },
    {
      id: '16',
      raw: 'DBA',
      title: 'DBA',
      group: '职位',
    },
    // 薪资
    {
      id: '17',
      raw: '0-10k',
      title: '0-10k',
      group: '薪资范围',
    },
    {
      id: '18',
      raw: '10k-20k',
      title: '10k-20k',
      group: '薪资范围',
    },
    {
      id: '19',
      raw: '20k-40k',
      title: '20k-40k',
      group: '薪资范围',
    },
    {
      id: '20',
      raw: '40k-more',
      title: '40k 以上',
      group: '薪资范围',
    },
    {
      id: '21',
      raw: 'negotiable',
      title: '面谈',
      group: '薪资范围',
    },
  ]
}

export const mockNaviCatalogTags = (): TNaviTag[] => {
  return [
    // 生产力 start
    {
      id: 'productivity',
      raw: 'productivity',
      title: '生产力',
      icon: `${ICON_CMD}/navi/tool.svg`,
      extra: ['生产力'],
    },
    {
      id: 'efficiency',
      raw: 'efficiency',
      title: '效率工具',
      extra: ['生产力', '效率工具'],
    },
    {
      id: 'manage',
      raw: 'manage',
      title: '项目管理',
      extra: ['生产力', '效率工具', '项目管理'],
    },
    {
      id: 'remote',
      raw: 'remote',
      title: '远程协作',
      extra: ['生产力', '效率工具', '远程协作'],
    },
    {
      id: 'browser',
      raw: 'browser',
      title: '浏览器插件',
      extra: ['生产力', '效率工具', '浏览器插件'],
    },
    {
      id: 'diagram',
      raw: 'diagram',
      title: '流程图',
      extra: ['生产力', '效率工具', '流程图'],
    },
    {
      id: 'GTD',
      raw: 'GTD',
      title: 'GTD',
      extra: ['生产力', '效率工具', 'GTD'],
    },
    {
      id: 'notes',
      raw: 'notes',
      title: '写作 / 笔记',
      extra: ['生产力', '效率工具', '写作 / 笔记'],
    },

    {
      id: 'mate',
      raw: 'mate',
      title: '开发伴侣',
      extra: ['生产力', '开发伴侣'],
    },
    {
      id: 'cmd',
      raw: 'cmd',
      title: '命令行',
      icon: `${ICON_CMD}/navi/shell.svg`,
      extra: ['生产力', '开发伴侣', '命令行'],
    },
    {
      id: 'convert',
      raw: 'convert',
      title: '格式转换',
      extra: ['生产力', '开发伴侣', '格式转换'],
    },

    {
      id: 'editor',
      raw: 'editor',
      title: '编辑器',
      extra: ['生产力', '开发伴侣', '编辑器'],
    },

    {
      id: 'docs',
      raw: 'docs',
      title: '文档生成',
      extra: ['生产力', '开发伴侣', '文档生成'],
    },

    {
      id: 'capture',
      raw: 'capture',
      title: '抓包工具',
      extra: ['生产力', '开发伴侣', '抓包工具'],
    },

    {
      id: 'radar',
      raw: 'radar',
      title: '信息获取',
      extra: ['生产力', '信息获取'],
    },

    {
      id: 'email',
      raw: 'email',
      title: '邮件管理',
      extra: ['生产力', '信息获取', '邮件管理'],
    },

    {
      id: 'podcast',
      raw: 'podcast',
      title: '播客',
      extra: ['生产力', '信息获取', '播客'],
    },

    {
      id: 'ref',
      raw: 'ref',
      title: '论文 / 文献',
      extra: ['生产力', '信息获取', '论文 / 文献'],
    },

    {
      id: 'privacy',
      raw: 'privacy',
      title: '隐私 & 安全',
      extra: ['生产力', '隐私 & 安全'],
    },

    {
      id: 'design',
      raw: 'design',
      title: '设计工具',
      extra: ['生产力', '设计工具'],
    },

    {
      id: 'opendata',
      raw: 'opendata',
      title: '公共数据',
      extra: ['生产力', '公共数据'],
    },
    // 生产力 end
    // ----------------
    // 设计灵感 start
    {
      id: 'design-idea',
      raw: 'design-idea',
      title: '设计灵感',
      icon: `${ICON_CMD}/navi/light.svg`,
      extra: ['设计灵感'],
    },
    {
      id: 'ixd',
      raw: 'ixd',
      title: '人机交互',
      icon: `${ICON_CMD}/navi/light.svg`,
      extra: ['设计灵感', '人机交互'],
    },
    {
      id: 'sci-fi',
      raw: 'sci-fi',
      title: '科幻世界',
      icon: `${ICON_CMD}/navi/sci-fi.svg`,
      // displayType: 'IMAGE',
      extra: ['设计灵感', '人机交互', '科电视界'],
    },
    {
      id: 'software',
      raw: 'software',
      title: '软件交互',
      extra: ['设计灵感', '人机交互', '软件交互'],
    },
    {
      id: 'board',
      raw: 'board',
      title: '仪表盘',
      extra: ['设计灵感', '人机交互', '仪表盘'],
    },
    {
      id: 'map',
      raw: 'map',
      title: '地图导航',
      extra: ['设计灵感', '人机交互', '地图导航'],
    },
    {
      id: 'others',
      raw: 'others',
      title: '奇奇怪怪',
      extra: ['设计灵感', '人机交互', '奇奇怪怪'],
    },
    {
      id: 'font',
      raw: 'font',
      title: '字体与排版',
      extra: ['设计灵感', '字体与排版'],
    },
    {
      id: 'sign',
      raw: 'sign',
      title: '店铺招牌',
      extra: ['设计灵感', '字体与排版', '店铺招牌'],
    },
    {
      id: 'slogan',
      raw: 'slogan',
      title: '标语横幅',
      extra: ['设计灵感', '字体与排版', '标语横幅'],
    },
    {
      id: 'draft',
      raw: 'draft',
      title: '设计手稿',
      extra: ['设计灵感', '字体与排版', '设计手稿'],
    },
    {
      id: 'columns',
      raw: 'columns',
      title: '画报杂志',
      extra: ['设计灵感', '字体与排版', '画报杂志'],
    },
    {
      id: 'logo',
      raw: 'logo',
      title: 'Logo 与徽章',
      extra: ['设计灵感', 'Logo 与徽章'],
    },
    {
      id: 'logo',
      raw: 'logo',
      title: '赛事 / 活动',
      extra: ['设计灵感', 'Logo 与徽章', '赛事活动'],
    },
    {
      id: 'logo',
      raw: 'logo',
      title: '商业品牌',
      extra: ['设计灵感', 'Logo 与徽章', '商业品牌'],
    },
    {
      id: 'badge',
      raw: 'badge',
      title: '队徽',
      extra: ['设计灵感', 'Logo 与徽章', '队徽'],
    },
    {
      id: 'badge2',
      raw: 'badge2',
      title: '家族徽章',
      extra: ['设计灵感', 'Logo 与徽章', '家族徽章'],
    },
    {
      id: 'badge3',
      raw: 'badge3',
      title: '行业证章',
      extra: ['设计灵感', 'Logo 与徽章', '行业证章'],
    },
    {
      id: 'Partten',
      raw: 'Partten',
      title: 'Partten',
      extra: ['设计灵感', 'Partten'],
    },
    {
      id: 'carpet',
      raw: 'carpet',
      title: '地毯',
      extra: ['设计灵感', 'Partten', '地毯'],
    },
    {
      id: 'glass',
      raw: 'glass',
      title: '彩色玻璃',
      extra: ['设计灵感', 'Partten', '彩色玻璃'],
    },
    {
      id: 'footbal',
      raw: 'football',
      title: '足球',
      extra: ['设计灵感', 'Partten', '足球'],
    },
    {
      id: 'board',
      raw: 'board',
      title: '冲浪 / 滑雪板',
      extra: ['设计灵感', 'Partten', '冲浪 / 滑雪板'],
    },
    {
      id: 'CropCircles',
      raw: 'CropCircles',
      title: '麦田怪圈',
      extra: ['设计灵感', 'Partten', '麦田怪圈'],
    },
    {
      id: 'rpartten',
      raw: 'rpartten',
      title: '背景图样',
      extra: ['设计灵感', 'Partten', '背景图样'],
    },
    {
      id: 'camouflage',
      raw: 'camouflage',
      title: '迷彩',
      extra: ['设计灵感', 'Partten', '迷彩'],
    },
    {
      id: 'snowflake',
      raw: 'snowflake',
      title: '雪花',
      extra: ['设计灵感', 'Partten', '雪花'],
    },
    {
      id: 'space',
      raw: 'space',
      title: '宇宙空间',
      extra: ['设计灵感', 'Partten', '宇宙空间'],
    },
    {
      id: 'others',
      raw: 'others',
      title: '奇奇怪怪',
      extra: ['设计灵感', 'Partten', '奇奇怪怪'],
    },
    {
      id: 'arch',
      raw: 'arch',
      title: '建筑之美',
      icon: `${ICON_CMD}/navi/bricks.svg`,
      extra: ['设计灵感', '建筑之美'],
    },
    {
      id: 'religion',
      raw: 'religion',
      title: '宗教建筑',
      extra: ['设计灵感', '建筑之美', '宗教建筑'],
    },
    {
      id: 'landmark',
      raw: 'landmark',
      title: '城市地标',
      extra: ['设计灵感', '建筑之美', '城市地标'],
    },
    {
      id: 'arena',
      raw: 'arena',
      title: '竞技场',
      extra: ['设计灵感', '建筑之美', '竞技场'],
    },
    {
      id: 'house',
      raw: 'house',
      title: '乡村',
      extra: ['设计灵感', '建筑之美', '乡村'],
    },
    {
      id: 'museum',
      raw: 'museum',
      title: '博物馆',
      extra: ['设计灵感', '建筑之美', '博物馆'],
    },
    {
      id: 'briage',
      raw: 'briage',
      title: '桥梁',
      extra: ['设计灵感', '建筑之美', '桥梁'],
    },
    {
      id: 'briage',
      raw: 'future',
      title: '概念设计',
      extra: ['设计灵感', '建筑之美', '概念设计'],
    },
    {
      id: 'briage',
      raw: 'future',
      title: '未来主义',
      extra: ['设计灵感', '建筑之美', '未来主义'],
    },
    {
      id: 'space',
      raw: 'space',
      title: '公共空间',
      extra: ['设计灵感', '公共空间'],
    },
    {
      id: 'library',
      raw: 'library',
      title: '公共空间',
      extra: ['设计灵感', '公共空间', '图书馆'],
    },
    {
      id: 'rest',
      raw: 'rest',
      title: '餐厅',
      extra: ['设计灵感', '公共空间', '餐厅'],
    },
    {
      id: 'office',
      raw: 'office',
      title: '办公室',
      extra: ['设计灵感', '公共空间', '办公室'],
    },
    {
      id: 'designset',
      raw: 'designset',
      title: '美剧布景',
      extra: ['设计灵感', '公共空间', '美剧布景'],
    },
    {
      id: 'hotel',
      raw: 'hotel',
      title: '酒店大堂',
      extra: ['设计灵感', '公共空间', '酒店大堂'],
    },
    {
      id: 'palace',
      raw: 'palace',
      title: '宫殿',
      extra: ['设计灵感', '公共空间', '宫殿'],
    },
    {
      id: 'cloth',
      raw: 'cloth',
      title: '服饰控',
      icon: `${ICON_CMD}/navi/cloth.svg`,
      extra: ['设计灵感', '服饰控'],
    },
    {
      id: 'ancient',
      raw: 'ancient',
      title: '中世纪',
      extra: ['设计灵感', '服饰控', '中世纪'],
    },
    {
      id: 'ancient',
      raw: 'ancient',
      title: '中世纪',
      extra: ['设计灵感', '服饰控', '中世纪'],
    },
    {
      id: 'uniform',
      raw: 'uniform',
      title: '行业制服',
      extra: ['设计灵感', '服饰控', '行业制服'], // '军装', '足球队服'
    },
    {
      id: 'mechanical',
      raw: 'mechanical',
      title: '机械迷',
      extra: ['设计灵感', '机械迷'],
    },
    {
      id: 'car',
      raw: 'car',
      title: '机械迷',
      extra: ['设计灵感', '机械迷', '汽车'],
    },
    {
      id: 'moto',
      raw: 'moto',
      title: '机械迷',
      extra: ['设计灵感', '机械迷', '摩托'],
    },
    {
      id: 'spacei',
      raw: 'spacei',
      title: '航天器',
      extra: ['设计灵感', '机械迷', '航天器'],
    },
    {
      id: 'aireforce',
      raw: 'aireforce',
      title: '战斗机',
      extra: ['设计灵感', '机械迷', '战斗机'],
    },
    {
      id: 'muscle',
      raw: 'muscle',
      title: '工程机械',
      extra: ['设计灵感', '机械迷', '工程机械'],
    },
    {
      id: 'id',
      raw: 'id',
      title: '工业设计',
      extra: ['设计灵感', '工业设计'],
    },
    {
      id: 'shoe',
      raw: 'shoe',
      title: '球鞋',
      extra: ['设计灵感', '工业设计', '球鞋'],
    },
    {
      id: 'kitchen',
      raw: 'kitchen',
      title: '厨具',
      extra: ['设计灵感', '工业设计', '厨具'],
    },
    {
      id: 'hardware',
      raw: 'hardware',
      title: '五金工具',
      extra: ['设计灵感', '工业设计', '五金工具'],
    },
    {
      id: 'video',
      raw: 'video',
      title: '视频短片',
      extra: ['设计灵感', '视频短片'],
    },
    {
      id: 'ad',
      raw: 'ad',
      title: '优秀广告',
      extra: ['设计灵感', '视频短片', '优秀广告'],
    },
    {
      id: 'tv',
      raw: 'tv',
      title: '美剧片头',
      extra: ['设计灵感', '视频短片', '美剧片头'],
    },
    // 设计灵感 end
    // ----------------
    // 技术选型 start
    {
      id: 'techselection',
      raw: 'techselection',
      title: '技术选型',
      icon: `${ICON_CMD}/navi/tool.svg`,
      extra: ['技术选型'],
    },
    {
      id: 'web',
      raw: 'web',
      title: '网站开发',
      icon: `${ICON_CMD}/navi/tool.svg`,
      extra: ['技术选型', '网站开发'],
    },
    {
      id: 'ue',
      raw: 'ue',
      title: '界面框架',
      extra: ['技术选型', '网站开发', '界面框架'],
    },
    {
      id: 'richeditor',
      raw: 'richeditor',
      title: '富文本编辑',
      extra: ['技术选型', '网站开发', '富文本编辑'],
    },
    {
      id: 'visualization',
      raw: 'visualization',
      title: '可视化',
      extra: ['技术选型', '网站开发', '可视化'],
    },
    {
      id: 'devops',
      raw: 'devops',
      title: '运维分析',
      extra: ['技术选型', '网站开发', '运维分析'],
    },
    {
      id: 'buildsite',
      raw: 'buildsite',
      title: '建站工具',
      extra: ['技术选型', '建站工具'],
    },
    {
      id: 'blog',
      raw: 'blog',
      title: '博客',
      extra: ['技术选型', '建站工具', '博客'],
    },
    {
      id: 'home',
      raw: 'home',
      title: '官网',
      extra: ['技术选型', '建站工具', '官网'],
    },
    {
      id: 'cms',
      raw: 'cms',
      title: 'CMS',
      extra: ['技术选型', '建站工具', 'CMS'],
    },
    {
      id: 'forum',
      raw: 'forum',
      title: '社区',
      extra: ['技术选型', '建站工具', '社区'],
    },
    {
      id: 'app',
      raw: 'app',
      title: '移动 App',
      extra: ['技术选型', '移动 App'],
    },
    {
      id: 'ai',
      raw: 'ai',
      title: '人工智能',
      extra: ['技术选型', '人工智能'],
    },
    {
      id: 'ml',
      raw: 'ml',
      title: '机器学习',
      extra: ['技术选型', '人工智能', '机器学习'],
    },
    {
      id: 'picprocess',
      raw: 'picprocess',
      title: '图像处理',
      extra: ['技术选型', '人工智能', '图像处理'],
    },
    {
      id: 'voice',
      raw: 'voice',
      title: '语音识别',
      extra: ['技术选型', '人工智能', '语音识别'],
    },
    {
      id: 'nlp',
      raw: 'nlp',
      title: '自然语言处理',
      extra: ['技术选型', '人工智能', '自然语言处理'],
    },
    {
      id: 'db',
      raw: 'db',
      title: '数据库',
      extra: ['技术选型', '数据库'],
    },
    {
      id: 'db1',
      raw: 'db1',
      title: '数据库',
      extra: ['技术选型', '数据库', '关系型数据库'],
    },
    {
      id: 'db2',
      raw: 'db2',
      title: '数据库',
      extra: ['技术选型', '数据库', '文档数据库'],
    },
    {
      id: 'db3',
      raw: 'db3',
      title: '数据库',
      extra: ['技术选型', '数据库', '图数据库'],
    },
    {
      id: 'db4',
      raw: 'db5',
      title: '数据库',
      extra: ['技术选型', '数据库', '时序数据库'],
    },
    {
      id: 'dataanalysis',
      raw: 'dataanalysis',
      title: '数据分析',
      extra: ['技术选型', '数据分析'],
    },
    {
      id: 'devops',
      raw: 'devops',
      title: '测试运维',
      extra: ['技术选型', '测试运维'],
    },
    {
      id: 'embed',
      raw: 'embed',
      title: '嵌入式',
      extra: ['技术选型', '嵌入式'],
    },
    {
      id: 'blockchain',
      raw: 'blockchain',
      title: '区块链',
      extra: ['技术选型', '区块链'],
    },
    // 技术选型 end
    // ----------------
    // 酷团队 start
    {
      id: 'teams',
      raw: 'teams',
      title: '酷团队',
      icon: `${ICON_CMD}/navi/group.svg`,
      extra: ['酷团队'],
    },
    // 酷团队 end
    // ----------------
    // 计算机名人堂 start
    {
      id: 'hall-of-fame',
      raw: 'hall-of-fame',
      title: '计算机名人堂',
      icon: `${ICON_CMD}/navi/lighthouse.svg`,
      extra: ['计算机名人堂'],
    },
    {
      id: 'TuringAward',
      raw: 'TuringAward',
      title: '图灵奖',
      displayType: 'FAME_PEOPLE',
      icon: `${ICON_CMD}/navi/crown.svg`,
      extra: ['计算机名人堂', '图灵奖'],
    },
    {
      id: 'topCoder',
      raw: 'topCoder',
      title: 'TopCoder',
      icon: `${ICON_CMD}/navi/top.svg`,
      extra: ['计算机名人堂', 'TopCoder'],
    },
    {
      id: 'fatherOf',
      raw: 'fatherOf',
      title: '语言之父',
      icon: `${ICON_CMD}/navi/founder.svg`,
      extra: ['计算机名人堂', '语言之父'],
    },
    {
      id: 'edu',
      raw: 'edu',
      title: '学术界',
      icon: `${ICON_CMD}/navi/phd.svg`,
      extra: ['计算机名人堂', '学术界'],
    },
    {
      id: 'industry',
      raw: 'industry',
      title: '工业界',
      icon: `${ICON_CMD}/navi/industry.svg`,
      extra: ['计算机名人堂', '工业界'],
    },
    {
      id: 'frontend',
      raw: 'frontend',
      title: '前端',
      icon: `${ICON_CMD}/navi/hammer.svg`,
      extra: ['计算机名人堂', '工业界', '前端'],
    },
    {
      id: 'backend',
      raw: 'backend',
      title: '后端',
      icon: `${ICON_CMD}/navi/hammer.svg`,
      extra: ['计算机名人堂', '工业界', '后端'],
    },
    {
      id: 'client',
      raw: 'client',
      title: '客户端',
      icon: `${ICON_CMD}/navi/hammer.svg`,
      extra: ['计算机名人堂', '工业界', '客户端'],
    },
    {
      id: 'hacker',
      raw: 'hacker',
      title: '黑客列传',
      icon: `${ICON_CMD}/navi/hacker.svg`,
      extra: ['计算机名人堂', '黑客列传'],
    },
    {
      id: 'leader',
      raw: 'leader',
      title: '商业领袖',
      icon: `${ICON_CMD}/navi/leader.svg`,
      extra: ['计算机名人堂', '商业领袖'],
    },
    // 计算机名人堂 end
    // ----------------
    // 博物馆 start
    {
      id: 'museum',
      raw: 'museum',
      title: 'IT 博物馆',
      icon: `${ICON_CMD}/navi/lighthouse.svg`,
      extra: ['博物馆'],
    },
    // 博物馆 end
    // ----------------
    // 教程 / 101 start
    // 路线图谱，视频课程，技术书籍，社区文档, 高校教学，新手项目, 比如 https://web.stanford.edu/class/cs224n/
    {
      id: '101',
      raw: '101',
      title: '教程 / 101',
      icon: `${ICON_CMD}/navi/phd.svg`,
      extra: ['101'],
    },
    {
      id: 'roadmap',
      raw: 'roadmap',
      title: '路线图谱',
      extra: ['101', '路线图谱'],
    },
    {
      id: 'video',
      raw: 'video',
      title: '视频课程',
      extra: ['101', '视频课程'],
    },
    {
      id: 'book',
      raw: 'book',
      title: '技术书籍',
      extra: ['101', '技术书籍'],
    },
    {
      id: 'docs',
      raw: 'docs',
      title: '社区文档',
      extra: ['101', '社区文档'],
    },
    {
      id: 'edu',
      raw: 'edu',
      title: '高校教学',
      extra: ['101', '高校教学'],
    },
    {
      id: 'bootstrap',
      raw: 'bootstrap',
      title: '新手项目',
      extra: ['101', '新手项目'],
    },
    // 教程 / 101 end
    // ----------------
    // Conf / Talks start
    {
      id: 'talks',
      raw: 'talks',
      title: 'Conf / Talks',
      icon: `${ICON_CMD}/navi/movie.svg`,
      extra: ['source'],
    },
    // Conf / Talks end
    // ----------------

    // 优质信息源 start
    {
      id: 'source',
      raw: 'source',
      title: '优质信息源',
      icon: `${ICON_CMD}/navi/subscribe.svg`,
      extra: ['优质信息源'],
    },
    {
      id: 'blog',
      raw: 'blog',
      title: '个人博客',
      icon: `${ICON_CMD}/navi/blog.svg`,
      extra: ['优质信息源', '个人博客'],
    },
    {
      id: 'media',
      raw: 'media',
      title: '科技媒体',
      icon: `${ICON_CMD}/navi/macphone.svg`,
      extra: ['优质信息源', '科技媒体'],
    },
    {
      id: 'twitter',
      raw: 'twitter',
      title: 'Twitter',
      icon: `${ICON_CMD}/navi/twitter.svg`,
      extra: ['优质信息源', 'Twitter'],
    },
    {
      id: 'weekly',
      raw: 'weekly',
      title: '周刊 / 月报',
      icon: `${ICON_CMD}/navi/news-paper.svg`,
      extra: ['优质信息源', '周刊 / 月报'],
    },
    {
      id: 'podcast',
      raw: 'podcast',
      title: '播客',
      icon: `${ICON_CMD}/navi/podcast.svg`,
      extra: ['优质信息源', '播客'],
    },

    // 优质信息源 end
    // ----------------
    // 领域发现 start
    {
      id: 'domain', // uid.gen(),
      raw: 'domain',
      title: '跨界发现',
      icon: `${ICON_CMD}/navi/door.svg`,
      extra: ['跨界发现'],
    },
    {
      id: 'industry',
      raw: 'industry',
      title: '工业软件',
      extra: ['跨界发现', '工业软件'],
    },
    {
      id: 'sport',
      raw: 'sport',
      title: '体育产业',
      extra: ['跨界发现', '体育产业'],
    },
    {
      id: 'cg',
      raw: 'cg',
      title: 'CG 动画',
      extra: ['跨界发现', 'CG 动画'],
    },
    {
      id: 'game',
      raw: 'game',
      title: '游戏制作',
      extra: ['跨界发现', '游戏制作'],
    },
    {
      id: 'si',
      raw: 'si',
      title: '科学研究',
      extra: ['跨界发现', '科学研究'],
    },
    {
      id: 'others',
      raw: 'others',
      title: '奇奇怪怪',
      extra: ['跨界发现', '奇奇怪怪'],
    },

    // 领域发现 end
    // ----------------
    // TopN start
    {
      id: 'topn',
      raw: 'topn',
      title: 'TopN',
      icon: `${ICON_CMD}/navi/subscribe.svg`,
      extra: ['topn'],
    },
    // TopN end
    // ----------------
    // 下班后 start
    {
      id: 'afterwork',
      raw: 'afterwork',
      title: '下班后',
      icon: `${ICON_CMD}/navi/subscribe.svg`,
      extra: ['下班后'],
    },
    {
      id: 'sideproject',
      raw: 'sideproject',
      title: '副业组队',
      extra: ['下班后', '副业组队'],
    },
    {
      id: 'sport',
      raw: 'sport',
      title: '体育运动',
      extra: ['下班后', '体育运动'],
    },
    {
      id: 'fun',
      raw: 'fun',
      title: '摸鱼指南',
      extra: ['下班后', '摸鱼指南'],
    },
    {
      id: 'urbanlegend',
      raw: 'urbanlegend',
      title: '都市传说',
      extra: ['下班后', '摸鱼指南', '都市传说'],
    },
    {
      id: 'ereview',
      raw: 'review',
      title: '数码测评',
      extra: ['下班后', '摸鱼指南', '数码测评'],
    },
    {
      id: 'mreview',
      raw: 'review',
      title: '影 / 剧评',
      extra: ['下班后', '摸鱼指南', '影 / 剧评'],
    },
    {
      id: 'eat',
      raw: 'eat',
      title: '逛吃',
      extra: ['下班后', '摸鱼指南', '逛吃'],
    },
    {
      id: 'others',
      raw: 'others',
      title: '奇奇怪怪',
      extra: ['下班后', '摸鱼指南', '奇奇怪怪'],
    },
  ]
}

export const mockWorks = () => {
  return {
    id: '1',
    cover: `${ASSETS_ENDPOINT}/works/market1.jpeg`,
    title: 'coderplanets',
    desc: '可能是最性感的开发者社区',
    isOSS: true,
    tag: {
      title: '协作工具',
    },
    platform: {
      title: '网站',
    },
    techStack: [
      {
        raw: 'javascript',
        logo: `${ICON_BASE}/pl/javascript.svg`,
      },
      {
        raw: 'java',
        logo: `${ICON_BASE}/pl/java.svg`,
      },
      {
        raw: 'elixir',
        logo: `${ICON_BASE}/pl/elxiir.svg`,
      },
      {
        raw: 'ruby',
        logo: `${ICON_BASE}/pl/ruby.svg`,
      },
    ],
    upvotesCount: 99,
    commentsCount: 99,
    insertedAt: '3天前',
    isOpenSource: true,
  }
}

export const mockBlogFeeds = () => {
  return [
    {
      id: '1',
      title: 'HTML slot 插槽元素深入',
      digest:
        '本文应该是目前最深入最细致的介绍 HTML slot 插槽元素的文章了，如果您对Web 组件开发感兴趣，则本文内容不容错过。',
      linkAddr: 'https://www.zhangxinxu.com/wordpress/2021/08/js-weakmap-es6/',
      published: 'Sun, 15 Aug 2021 04:40:49 +0000',
    },
    {
      id: '2',
      title: 'SVG任意基本图形转path路径',
      digest:
        '虽然不属于常用场景，但是对于部分开发者却很需要，所以还是专门分享了出来，希望可以帮到需要的人。',
      linkAddr: 'https://www.zhangxinxu.com/wordpress/2021/08/js-weakmap-es6/',
      published: 'Sat, 07 Aug 2021 15:18:51 +0000',
    },
    {
      id: '3',
      title: '为什么HTML <picture>元素很少见人使用？',
      digest:
        '元素还是很实用的，带大家了解下，顺便讲讲为什么这个HTML属性平时项目开发很少见人使用',
      linkAddr: 'https://www.zhangxinxu.com/wordpress/2021/07/html-picture/',
      published: 'Mon, 26 Jul 2021 15:35:20 +0000',
    },
    {
      id: '4',
      title: '借助HTML ping属性实现数据上报',
      digest:
        'Navigator.sendBeacon() 是浏览器提供的 JS 层面的数据上报方法，而 HTML ping 属性则是浏览器在 HTML 层面提供的 POST 数据埋点上报方法，比预想的好实用些，大家可以过来了解下，说不定就可以用起来。',
      linkAddr: 'https://www.zhangxinxu.com/wordpress/2021/09/html-ping',
      published: 'Tue, 14 Sep 2021 08:02:05 +0000',
    },
    {
      id: '5',
      title: 'APNG在线制作、兼容、播放和暂停',
      digest:
        'APNG用起来还是挺爽的，整体来看，要比CSS动画+图片序列实现动画要更好，本文就基于实际开发经验，把如何控制APNG，使用注意事项等，通过文字描述加演示告知大家，让大家可以快速上手使用。',
      linkAddr:
        'https://www.zhangxinxu.com/wordpress/2021/09/apng-maker-pause-play-ie/',
      published: 'Sun, 12 Sep 2021 09:12:07 +0000',
    },
    {
      id: '6',
      title: '不使用file类型input也能触发文件上传',
      digest:
        '介绍全新的File System Access API，也就是文件系统访问API，可以无需专门的 HTML 文件选择控件，纯 JS 代码就可以触发本地文件的选择，支持文件类型的指定，有demo，有代码示意，可以进来了解下。',
      linkAddr:
        'https://www.zhangxinxu.com/wordpress/2021/08/file-system-access-api/',
      published: 'Sun, 22 Aug 2021 02:43:11 +0000',
    },
    {
      id: '7',
      title: '关于《CSS新世界》这本书',
      digest:
        '推荐我的新书《CSS新世界》，我为自己代言，点击进入了解关于本书更多信息。',
      linkAddr:
        'https://www.zhangxinxu.com/wordpress/2021/08/css%e6%96%b0%e4%b8%96%e7%95%8c/',
      published: 'Mon, 16 Aug 2021 17:46:28 +0000',
    },
  ]
}
