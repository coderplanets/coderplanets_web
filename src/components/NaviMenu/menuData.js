import { ICON_CMD } from '@config'

const menu = [
  {
    id: '0',
    title: '本周热议',
    icon: `${ICON_CMD}/navi_fire.svg`,
    displayType: 'NEWS_FEED',
    childMenu: [],
  },
  {
    id: '101',
    title: '酷工具 / 服务',
    icon: `${ICON_CMD}/navi_china.svg`,
    childMenu: [
      {
        id: '0',
        title: '开发效率',
        icon: `${ICON_CMD}/navi_fire.svg`,
        childMenu: [
          {
            id: '102',
            title: '项目管理',
          },
          {
            id: '103',
            title: 'GTD 工具',
          },
          {
            id: '104',
            title: '编辑器圣战',
          },
          {
            id: '105',
            title: 'Github',
          },
        ],
      },
      {
        id: '1',
        title: '设计工具/资源',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '0',
            title: '原型设计',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '1',
            title: '幻灯片制作',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '3',
            title: '图标',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '2',
            title: '配色',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '5',
            title: '字体',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
        ],
      },
      {
        id: '2',
        title: '客户端',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '0',
            title: 'RSS',
          },
          {
            id: '1',
            title: '电子邮件',
          },
          {
            id: '2',
            title: '播客',
          },
          {
            id: '3',
            title: '写作、笔记类',
          },
        ],
      },
      {
        id: '3',
        title: '隐私 / 安全',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [],
      },
      {
        id: '4',
        title: '云服务',
        icon: `${ICON_CMD}/navi_fire.svg`,
      },
      // {
      //   id: '5',
      //   title: '行业软件',
      //   icon: `${ICON_CMD}/navi_china.svg`,
      //   childMenu: [
      //     {
      //       id: '0',
      //       title: '模型仿真',
      //       icon: `${ICON_CMD}/navi_china.svg`,
      //     },
      //     {
      //       id: '1',
      //       title: 'CAD制作',
      //       icon: `${ICON_CMD}/navi_china.svg`,
      //     },
      //   ],
      // },
      {
        id: '12',
        title: '公共数据',
        icon: `${ICON_CMD}/navi_group.svg`,
      },
      // {
      //   id: '103',
      //   title: '创投服务',
      //   icon: `${ICON_CMD}/navi_china.svg`,
      // },
      {
        id: '14',
        title: '数据可视化',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '15',
        title: '运营分析',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '16',
        title: '多媒体',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '0',
            title: '视频',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '1',
            title: '音频',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
        ],
      },
    ],
  },
  {
    id: '102',
    title: '基础设施', // 操作系统，数据库，网络协议，编程语言，重要算法。等等
    icon: `${ICON_CMD}/navi_china.svg`,
    childMenu: [
      {
        id: '0',
        title: '操作系统',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '1',
        title: '数据库',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '0',
            title: '全部',
          },
          {
            id: '1',
            title: '关系型数据库',
          },
          {
            id: '2',
            title: '时序数据库',
          },
          {
            id: '3',
            title: '文档数据库',
          },
          {
            id: '4',
            title: '内存数据库',
          },
        ],
      },
      {
        id: '2',
        title: '编程语言',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '3',
        title: '网络',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '4',
        title: '基础软件',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '0',
            title: '浏览器',
          },
          {
            id: '1',
            title: '办公软件',
          },
        ],
      },
    ],
  },
  {
    // 非 IT，设计类的网站
    id: '103',
    title: '设计灵感',
    icon: `${ICON_CMD}/navi_china.svg`,
    childMenu: [
      {
        id: '0',
        title: '科幻迷',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '1',
        title: 'LOGOs',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '2',
        title: '地图控',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '3',
        title: '地域特色',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '4',
        title: '操控面板',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '0',
            title: '车机系统',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '1',
            title: '智能家居',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
        ],
      },
    ],
  },
  {
    id: '12',
    title: '酷团队',
    icon: `${ICON_CMD}/navi_group.svg`,
    childMenu: [],
  },
  {
    id: '121',
    title: '新世界', // 非工具类的社区等
    icon: `${ICON_CMD}/navi_group.svg`,
    childMenu: [],
  },
  {
    id: '2',
    title: 'Podcast(播客)',
    icon: `${ICON_CMD}/navi_podcast.svg`,
    childMenu: [
      {
        id: '0',
        title: '技术类',
        icon: `${ICON_CMD}/navi_tips.svg`,
      },
      {
        id: '1',
        title: '设计类',
        icon: `${ICON_CMD}/navi_tips.svg`,
      },
      {
        id: '2',
        title: '杂谈类',
        icon: `${ICON_CMD}/navi_tips.svg`,
      },
    ],
  },
  // {
  //   id: '3',
  //   title: '代码技巧',
  //   icon: `${ICON_CMD}/navi_tips.svg`,
  //   childMenu: [],
  // },
  {
    id: '4',
    title: '教程 / 资源', // 技术书籍，中文文档, 翻译文章, 国外网校, 比如 https://web.stanford.edu/class/cs224n/
    icon: `${ICON_CMD}/navi_translate.svg`,
    childMenu: [],
  },
  {
    id: '41',
    title: 'IT 博物馆',
    icon: `${ICON_CMD}/navi_translate.svg`,
    childMenu: [],
  },
  {
    id: '6',
    title: '计算机名人堂',
    icon: `${ICON_CMD}/navi_famous.svg`,
    childMenu: [
      {
        id: '0',
        title: '图灵奖',
        displayType: 'FAME_PEOPLE',
        icon: `${ICON_CMD}/navi_hammer.svg`,
      },
      {
        id: '1',
        title: 'TopCoder',
        icon: `${ICON_CMD}/navi_hammer.svg`,
      },
      {
        id: '2',
        title: '学界',
        icon: `${ICON_CMD}/navi_hammer.svg`,
      },
      {
        id: '3',
        title: '工业界',
        icon: `${ICON_CMD}/navi_hammer.svg`,
        childMenu: [
          {
            id: '1',
            title: '前端',
            icon: `${ICON_CMD}/navi_hammer.svg`,
          },
          {
            id: '2',
            title: '后端',
            icon: `${ICON_CMD}/navi_hammer.svg`,
          },
          {
            id: '3',
            title: 'xx端',
            icon: `${ICON_CMD}/navi_hammer.svg`,
          },
        ],
      },
      {
        id: '4',
        title: '黑客',
        icon: `${ICON_CMD}/navi_hammer.svg`,
      },
    ],
  },
  // {
  //   id: '7',
  //   title: '独立博客', // --> 转移到 值得关注
  //   icon: `${ICON_CMD}/navi_blog.svg`,
  // },
  {
    id: '8',
    title: '独立开发者',
    icon: `${ICON_CMD}/navi_hammer.svg`,
    childMenu: [],
  },
  // {
  //   id: '9',
  //   title: '编辑器圣战',
  //   icon: `${ICON_CMD}/navi_jesus.svg`,
  // },
  {
    id: '10',
    title: '命令行',
    icon: `${ICON_CMD}/navi_shell.svg`,
    childMenu: [],
  },
  {
    id: '11',
    title: '酷发明',
    icon: `${ICON_CMD}/navi_community.svg`,
    childMenu: [],
  },
  {
    id: '14',
    title: '值得订阅', // 专栏，公众号，twitter, 微博 等等
    icon: `${ICON_CMD}/navi_subscribe.svg`,
    childMenu: [
      {
        id: '0',
        title: 'NewsLetter',
        icon: `${ICON_CMD}/navi_subscribe.svg`,
      },
      {
        id: '1',
        title: '知乎专栏',
        icon: `${ICON_CMD}/navi_subscribe.svg`,
      },
      {
        id: '2',
        title: '独立播客',
        icon: `${ICON_CMD}/navi_subscribe.svg`,
      },
      {
        id: '4',
        title: '团队博客',
        icon: `${ICON_CMD}/navi_subscribe.svg`,
      },
      {
        id: '5',
        title: '微信公众号',
        icon: `${ICON_CMD}/navi_subscribe.svg`,
      },
    ],
  },
  // {
  //   id: '15',
  //   title: '中文文档',
  //   icon: `${ICON_CMD}/navi_eat.svg`,
  // },
  {
    id: '16',
    title: '影剧 / Talks',
    icon: `${ICON_CMD}/navi_movie.svg`,
    childMenu: [],
  },
  {
    id: '18',
    title: '文体娱乐',
    icon: `${ICON_CMD}/navi_sport.svg`,
    childMenu: [],
  },
]

export default menu
