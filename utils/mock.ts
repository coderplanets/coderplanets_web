import type { TUser, TTag, TCommunity, TFilterTag, TNaviTag } from '@/spec'
import { SITE_LOGO, ICON, ICON_BASE, ICON_CMD, ASSETS_ENDPOINT } from '@/config'
import uid from '@/utils/uid'

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
    {
      id: uid.gen(),
      raw: 'productivity',
      title: '生产力',
      icon: `${ICON_CMD}/navi/tool.svg`,
      extra: ['生产力'],
    },
    {
      id: uid.gen(),
      raw: 'cmd',
      title: '命令行',
      icon: `${ICON_CMD}/navi/shell.svg`,
      extra: ['生产力', '命令行'],
    },
    {
      id: uid.gen(),
      raw: 'efficiency-tools',
      title: '工作效率',
      icon: `${ICON_CMD}/navi/timer.svg`,
      extra: ['生产力', '工作效率'],
    },
    {
      id: uid.gen(),
      raw: 'gtd',
      title: 'GTD 工具',
      extra: ['生产力', '工作效率', ''],
    },
    {
      id: uid.gen(),
      raw: 'manage',
      title: '项目管理',
      extra: ['生产力', '工作效率', ''],
    },
    {
      id: uid.gen(),
      raw: 'editor',
      title: '编辑器圣战',
      extra: ['生产力', '工作效率', ''],
    },
    {
      id: uid.gen(),
      raw: 'writing',
      title: '写作 / 笔记',
      extra: ['生产力', '工作效率', ''],
    },
    {
      id: uid.gen(),
      raw: 'convert',
      title: '格式转换',
      extra: ['生产力', '工作效率', ''],
    },
    {
      id: uid.gen(),
      raw: 'design-idea',
      title: '设计灵感',
      icon: `${ICON_CMD}/navi/light.svg`,
      extra: ['设计灵感'],
    },
    {
      id: uid.gen(),
      raw: 'sci-fi',
      title: '科幻世界',
      icon: `${ICON_CMD}/navi/sci-fi.svg`,
      // displayType: 'IMAGE',
      extra: ['设计灵感', '科幻世界'],
    },
    {
      id: uid.gen(),
      raw: 'arch',
      title: '建筑之美',
      icon: `${ICON_CMD}/navi/bricks.svg`,
      extra: ['设计灵感', '建筑之美'],
    },
  ]
}

export const mockNaviCatalogMenu = (): TNaviTag[] => {
  return [
    {
      id: 'aa', // uid.gen(),
      raw: uid.gen(),
      title: '生产力',
      icon: `${ICON_CMD}/navi/tool.svg`,
      childMenu: [
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '命令行',
          icon: `${ICON_CMD}/navi/shell.svg`,
          childMenu: [],
        },
        {
          id: 'bb', // uid.gen(),
          raw: uid.gen(),
          title: '工作效率',
          icon: `${ICON_CMD}/navi/timer.svg`,
          childMenu: [
            {
              id: 'cc', // uid.gen(),
              raw: uid.gen(),
              title: 'GTD 工具',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '项目管理',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '编辑器圣战',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: 'Github',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '写作 / 笔记',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '格式转换',
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '信息获取',
          icon: `${ICON_CMD}/navi/grab_info.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: 'RSS',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '电子邮件',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '播客',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '搜索引擎',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '翻译工具',
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '隐私 & 安全',
          icon: `${ICON_CMD}/navi/awesome.svg`,
          childMenu: [],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '界面设计',
          icon: `${ICON_CMD}/navi/ruler.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '原型设计',
              icon: `${ICON_CMD}/navi/china.svg`,
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '幻灯片制作',
              icon: `${ICON_CMD}/navi/china.svg`,
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '图标',
              icon: `${ICON_CMD}/navi/china.svg`,
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '配色',
              icon: `${ICON_CMD}/navi/china.svg`,
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '字体',
              icon: `${ICON_CMD}/navi/china.svg`,
            },
          ],
        },

        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '建站工具',
          icon: `${ICON_CMD}/navi/cloud.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '博客',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: 'CMS',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '官网',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '论坛',
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '公共数据源',
          icon: `${ICON_CMD}/navi/data.svg`,
          childMenu: [],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '运营分析',
          icon: `${ICON_CMD}/navi/monitor.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '访问统计',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '问卷调查',
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '多媒体',
          icon: `${ICON_CMD}/navi/media.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '视频',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '音频',
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '奇奇怪怪',
          icon: `${ICON_CMD}/navi/webapp.svg`,
          childMenu: [],
        },
      ],
    },
    {
      // 非 IT，设计类的网站
      id: uid.gen(),
      raw: uid.gen(),
      title: '设计灵感',
      icon: `${ICON_CMD}/navi/light.svg`,
      childMenu: [
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '科幻世界',
          icon: `${ICON_CMD}/navi/sci-fi.svg`,
          displayType: 'IMAGE',
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '建筑之美',
          icon: `${ICON_CMD}/navi/bricks.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '宗教建筑',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '乡村',
              childMenu: [
                {
                  id: uid.gen(),
                  raw: uid.gen(),
                  icon: `${ICON_CMD}/navi/bricks.svg`,
                  title: '小卖部',
                },
              ],
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '城市地标',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '竞技场',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '博物馆',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '火车站',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '桥梁',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '未来主义',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '奇奇怪怪',
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '公共空间',
          icon: `${ICON_CMD}/navi/space_in.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              // https://www.zhihu.com/search?type=content&q=%E5%9B%BE%E4%B9%A6%E9%A6%86%20%E5%86%85%E9%83%A8%E8%AE%BE%E8%AE%A1
              title: '图书馆',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '餐厅', // 酒店内，游艇内，等等, google、亚马逊，微软 办公室等等
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '办公室', // google、亚马逊，微软 办公室等等
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '美剧布景',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '酒店大堂',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '宫殿',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '会展中心',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '超级工厂',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '飞机场',
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '服饰控',
          icon: `${ICON_CMD}/navi/cloth.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '中国风',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '古罗马',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '军装',
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '文字与排版',
          icon: `${ICON_CMD}/navi/text.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '文章排版',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '店铺招牌',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '标语条幅', // 脱欧大巴等等
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '车机系统',
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: 'LOGO',
          icon: `${ICON_CMD}/navi/logo.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: 'Pattens',
          icon: `${ICON_CMD}/navi/pattern.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '地毯',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '彩色玻璃',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '背景图案',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '微生物',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '滑雪 | 冲浪板',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '足球',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '迷彩',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '雪花',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '宇宙空间',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '奇奇怪怪',
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '创意广告',
          icon: `${ICON_CMD}/navi/ad.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '工业设计',
          icon: `${ICON_CMD}/navi/industry_design.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '日用品',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '球鞋',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '奇奇怪怪',
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '机械迷',
          icon: `${ICON_CMD}/navi/mechanical.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '汽车', // 工程车，特种车，F1...
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '摩托',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '航天器', // 月球车
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '战斗机',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '发动机',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '奇奇怪怪',
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '魔鬼细节',
          icon: `${ICON_CMD}/navi/ghost.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '网站 / App',
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '奇奇怪怪',
          icon: `${ICON_CMD}/navi/others.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '地图控',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '车机系统',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '涂鸦',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '井盖',
            },
          ],
        },
      ],
    },
    {
      id: 'ktd',
      raw: 'ktd',
      title: '酷团队',
      icon: `${ICON_CMD}/navi/group.svg`,
      childMenu: [],
    },

    {
      id: uid.gen(),
      raw: uid.gen(),
      title: '计算机名人堂',
      icon: `${ICON_CMD}/navi/lighthouse.svg`,
      childMenu: [
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '图灵奖',
          displayType: 'FAME_PEOPLE',
          icon: `${ICON_CMD}/navi/crown.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: 'TopCoder',
          icon: `${ICON_CMD}/navi/top.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '语言之父',
          icon: `${ICON_CMD}/navi/founder.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '商业领袖',
          icon: `${ICON_CMD}/navi/leader.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '学术界',
          icon: `${ICON_CMD}/navi/phd.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '工业界',
          icon: `${ICON_CMD}/navi/industry.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '前端',
              icon: `${ICON_CMD}/navi/hammer.svg`,
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '后端',
              icon: `${ICON_CMD}/navi/hammer.svg`,
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: 'xx端',
              icon: `${ICON_CMD}/navi/hammer.svg`,
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '黑客列传',
          icon: `${ICON_CMD}/navi/hacker.svg`,
        },
      ],
    },
    {
      id: uid.gen(),
      raw: uid.gen(),
      title: '独立开发者',
      icon: `${ICON_CMD}/navi/hammer.svg`,
      childMenu: [],
    },
    {
      id: uid.gen(),
      raw: uid.gen(),
      title: '教程 / 101', // 技术书籍，中文文档, 翻译(放标签里吧), 国外网校, 比如 https://web.stanford.edu/class/cs224n/
      icon: `${ICON_CMD}/navi/glasses.svg`,
      childMenu: [
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '前端',
          icon: `${ICON_CMD}/navi/translate.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: 'iOS',
          icon: `${ICON_CMD}/navi/translate.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: 'Android',
          icon: `${ICON_CMD}/navi/translate.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '后端',
          icon: `${ICON_CMD}/navi/translate.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '设计',
          icon: `${ICON_CMD}/navi/translate.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '产品',
          icon: `${ICON_CMD}/navi/translate.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '奇奇怪怪',
          icon: `${ICON_CMD}/navi/others.svg`,
        },
      ],
    },
    {
      id: 'ac', // uid.gen(),
      raw: 'toto',
      title: '领域发现',
      icon: `${ICON_CMD}/navi/door.svg`,
      childMenu: [
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '设计师',
          icon: `${ICON_CMD}/navi/sci-fi.svg`,
          displayType: 'IMAGE',
          // 归类: https://tympanus.net/codrops/
          // css tricks ...
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '开发者社区',
          icon: `${ICON_CMD}/navi/sci-fi.svg`,
          displayType: 'IMAGE',
        },
      ],
    },
    {
      id: uid.gen(),
      raw: uid.gen(),
      title: '优质信息源',
      icon: `${ICON_CMD}/navi/subscribe.svg`,
      childMenu: [
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '周刊 / 月报',
          icon: `${ICON_CMD}/navi/news-paper.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: 'Medium',
          icon: `${ICON_CMD}/navi/medium.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: 'Twitter',
          icon: `${ICON_CMD}/navi/twitter.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '专栏类',
          icon: `${ICON_CMD}/navi/columns.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '知乎',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '网易？',
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '播客类',
          icon: `${ICON_CMD}/navi/podcast.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '技术类',
              icon: `${ICON_CMD}/navi/tips.svg`,
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '设计类',
              icon: `${ICON_CMD}/navi/tips.svg`,
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '杂谈类',
              icon: `${ICON_CMD}/navi/tips.svg`,
            },
          ],
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '视频类',
          icon: `${ICON_CMD}/navi/twitter.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '独立博客',
          icon: `${ICON_CMD}/navi/blog.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '团队博客',
          icon: `${ICON_CMD}/navi/team.svg`,
          childMenu: [
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '全部',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '大前端',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: '设计师',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: 'iOS',
            },
            {
              id: uid.gen(),
              raw: uid.gen(),
              title: 'Android',
            },
          ],
        },
        // {
        //   id: uid.gen(),
        // raw: uid.gen(),
        //   title: '微信公众号',
        //   icon: `${ICON_CMD}/navi/weichat_gzh.svg`,
        // },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '泛科技媒体',
          icon: `${ICON_CMD}/navi/macphone.svg`,
        },
      ],
    },
    {
      id: '41',
      title: 'IT 博物馆',
      raw: 'raw',
      icon: `${ICON_CMD}/navi_translate.svg`,
      childMenu: [],
    },
    {
      id: uid.gen(),
      raw: uid.gen(),
      title: '酷发明',
      icon: `${ICON_CMD}/navi/experiment.svg`,
      childMenu: [],
    },
    {
      id: uid.gen(),
      raw: uid.gen(),
      title: '排行榜',
      icon: `${ICON_CMD}/navi/experiment.svg`,
      childMenu: [],
    },

    {
      id: uid.gen(),
      raw: uid.gen(),
      title: '影剧 / Talks',
      icon: `${ICON_CMD}/navi/movie.svg`,
      childMenu: [],
    },

    {
      id: uid.gen(),
      raw: uid.gen(),
      title: '找到组织', // 红蓝粉
      icon: `${ICON_CMD}/navi/sport.svg`,
      childMenu: [
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '足球',
          icon: `${ICON_CMD}/navi/sport.svg`,
        },
        {
          id: uid.gen(),
          raw: uid.gen(),
          title: '篮球',
          icon: `${ICON_CMD}/navi/sport.svg`,
        },
      ],
    },

    {
      id: uid.gen(),
      raw: uid.gen(),
      title: '摸鱼指南',
      icon: `${ICON_CMD}/navi/sport.svg`,
      childMenu: [],
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
        icon: `${ICON_BASE}/pl/javascript.svg`,
      },
      {
        raw: 'java',
        icon: `${ICON_BASE}/pl/java.svg`,
      },
      {
        raw: 'elixir',
        icon: `${ICON_BASE}/pl/elxiir.svg`,
      },
      {
        raw: 'ruby',
        icon: `${ICON_BASE}/pl/ruby.svg`,
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
