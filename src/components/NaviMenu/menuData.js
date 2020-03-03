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
            id: '103',
            title: 'GTD 工具',
          },
          {
            id: '102',
            title: '项目管理',
          },
          {
            id: '104',
            title: '编辑器圣战',
          },
          {
            id: '105',
            title: 'Github',
          },
          {
            id: '106',
            title: '写作 / 笔记',
          },
          {
            id: '10222',
            title: '格式转换',
          },
        ],
      },
      {
        id: '10611',
        title: '信息获取',
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
            title: '搜索引擎',
          },
        ],
      },
      {
        id: '1',
        title: '设计工具 / 资源',
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
        id: '1111',
        title: 'Awesome-X',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [],
      },
      {
        id: '4',
        title: '实用 SaaS', // 建站工具，
        icon: `${ICON_CMD}/navi_fire.svg`,
        childMenu: [
          {
            id: '0',
            title: '建站工具', // wix / wordpress ...
          },
          {
            id: '1',
            title: '社区工具',
          },
        ],
      },
      {
        id: '11',
        title: 'web 开发',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '00',
            title: '开发语言',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '000',
            title: 'UI 框架',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '3',
            title: 'WebAssembly',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '5',
            title: 'Web 动画',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '1',
            title: '数据可视化',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '2',
            title: 'VR / AR',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '0',
            title: '富文本编辑器',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '4',
            title: 'Web 3.0',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '5',
            title: '奇奇怪怪',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
        ],
      },
      {
        id: '1222222',
        title: '机器学习',
        icon: `${ICON_CMD}/navi_group.svg`,
        childMenu: [
          {
            id: '0',
            title: '公共数据 ',
          },
        ],
      },
      {
        id: '12',
        title: '区块链', // or move to 基础设施 ?
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [],
      },
      {
        id: '3',
        title: '隐私 / 安全',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [],
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
      // {
      //   id: '103',
      //   title: '创投服务',
      //   icon: `${ICON_CMD}/navi_china.svg`,
      // },
      {
        id: '15',
        title: '运营分析',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '0',
            title: '访问统计',
          },
          {
            id: '1',
            title: '问卷调查',
          },
        ],
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
            filters: [
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
            title: '云服务', // CDN, 云主机， 等等
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '5',
            title: '区块链',
            icon: `${ICON_CMD}/navi_china.svg`,
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
        childMenu: [
          {
            id: '0',
            title: '人机交互',
          },
          {
            id: '1',
            title: '外星人',
          },
          {
            id: 'n',
            title: '奇奇怪怪',
          },
        ],
      },
      {
        id: '333',
        title: '建筑之美',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '0',
            title: '宗教建筑',
          },
          {
            id: '00',
            title: '城市地标',
          },
          {
            id: '2',
            title: '竞技场',
          },
          {
            id: '2oo',
            title: '博物馆',
          },
          {
            id: '...',
            title: '火车站',
          },
          {
            id: '222',
            title: '桥梁',
          },
          // {
          //   id: '222bbb',
          //   title: '机场 / 车站',
          // },
          {
            id: '2die2',
            title: '未来主义',
          },
          {
            id: '03ji',
            title: '奇奇怪怪',
          },
        ],
      },
      {
        id: '.em',
        title: '大空间',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '0',
            // https://www.zhihu.com/search?type=content&q=%E5%9B%BE%E4%B9%A6%E9%A6%86%20%E5%86%85%E9%83%A8%E8%AE%BE%E8%AE%A1
            title: '图书馆',
          },
          {
            id: '1',
            title: '餐厅', // 酒店内，游艇内，等等, google、亚马逊，微软 办公室等等
          },
          {
            id: '122',
            title: '办公室', // google、亚马逊，微软 办公室等等
          },
          {
            id: '1272',
            title: '会展中心?',
          },
          {
            id: '1222',
            title: '超级工厂',
          },
          {
            id: '2',
            title: '飞机场',
          },
        ],
      },
      {
        id: '3lie',
        title: '复古服饰',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '0',
            title: '中国风',
          },
          {
            id: '0',
            title: '古罗马',
          },
        ],
      },
      {
        id: '333fji',
        title: '工业设计',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '0',
            title: '日用品',
          },
          {
            id: '0',
            title: '球鞋',
          },
          {
            id: '03ji',
            title: '奇奇怪怪',
          },
        ],
      },
      {
        id: '2u',
        title: '文字控 / 排版',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '0',
            title: '文章排版',
          },
          {
            id: '1',
            title: '店铺招牌',
          },
          {
            id: '2',
            title: '标语条幅', // 脱欧大巴等等
          },
          {
            id: '3',
            title: '车机系统',
          },
        ],
      },
      {
        id: '1x',
        title: 'LOGO / 图腾',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '1111',
        title: '创意广告',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: 'fei',
        title: '机械之美',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '13i',
            title: '汽车', // 工程车，特种车，F1...
          },
          {
            id: '1',
            title: '摩托',
          },
          {
            id: '1',
            title: '航天器', // 月球车
          },
          {
            id: '1',
            title: '战斗机',
          },
          {
            id: '122',
            title: '发动机',
          },
          {
            id: '03ji',
            title: '奇奇怪怪',
          },
        ],
      },
      {
        id: 'ooo',
        title: 'Pattens',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '0',
            title: '地毯',
          },
          {
            id: '1',
            title: '彩色玻璃',
          },
          {
            id: '2',
            title: '背景图案',
          },
          {
            id: '3',
            title: '涂鸦',
          },
          {
            id: '4',
            title: '滑雪 | 冲浪板',
          },
          {
            id: '5',
            title: '足球',
          },
          {
            id: '6',
            title: '迷彩',
          },
          {
            id: '8',
            title: '雪花',
          },
          {
            id: '7',
            title: '奇奇怪怪',
          },
        ],
      },
      {
        id: '2334b',
        title: '网站 / App',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '5',
        title: '奇奇怪怪',
        icon: `${ICON_CMD}/navi_china.svg`,
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
    id: '2',
    title: '播客集',
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
  {
    id: '4',
    title: '教程 / 翻译', // 技术书籍，中文文档, 翻译文章, 国外网校, 比如 https://web.stanford.edu/class/cs224n/
    icon: `${ICON_CMD}/navi_translate.svg`,
    childMenu: [
      {
        id: '0',
        title: '中文文档',
      },
    ],
  },
  // {
  //   id: '41',
  //   title: 'IT 博物馆',
  //   icon: `${ICON_CMD}/navi_translate.svg`,
  //   childMenu: [],
  // },
  {
    id: '6',
    title: 'IT 名人堂',
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
      {
        id: '6',
        title: '科技媒体',
        icon: `${ICON_CMD}/navi_subscribe.svg`,
      },
    ],
  },
  {
    id: '16',
    title: '影剧 / Talks',
    icon: `${ICON_CMD}/navi_movie.svg`,
    childMenu: [],
  },
  {
    id: '121',
    title: '新世界', // 非工具类的社区等
    icon: `${ICON_CMD}/navi_group.svg`,
    childMenu: [
      {
        id: '0',
        title: '酷硬件',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '00',
        title: '建筑设计',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '1',
        title: '行业软件',
        icon: `${ICON_CMD}/navi_china.svg`,
        childMenu: [
          {
            id: '0',
            title: '模型仿真',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
          {
            id: '1',
            title: 'CAD制作',
            icon: `${ICON_CMD}/navi_china.svg`,
          },
        ],
      },
      // 各种未归类
      {
        id: '999',
        title: '奇奇怪怪',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
    ],
  },
  {
    id: '18',
    title: '文体娱乐',
    icon: `${ICON_CMD}/navi_sport.svg`,
    childMenu: [],
  },
]

export default menu
