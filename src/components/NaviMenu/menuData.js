import { ICON_CMD } from '@config'
import { uid } from '@utils'

const menu = [
  {
    id: uid.gen(),
    title: '本周热议',
    icon: `${ICON_CMD}/navi/fire.svg`,
    displayType: 'NEWS_FEED',
    childMenu: [],
  },
  {
    id: uid.gen(),
    title: '酷工具 / 服务',
    icon: `${ICON_CMD}/navi/tool.svg`,
    childMenu: [
      {
        id: uid.gen(),
        title: '开发效率',
        icon: `${ICON_CMD}/navi/timer.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: 'GTD 工具',
          },
          {
            id: uid.gen(),
            title: '项目管理',
          },
          {
            id: uid.gen(),
            title: '编辑器圣战',
          },
          {
            id: uid.gen(),
            title: 'Github',
          },
          {
            id: uid.gen(),
            title: '写作 / 笔记',
          },
          {
            id: uid.gen(),
            title: '格式转换',
          },
        ],
      },
      {
        id: uid.gen(),
        title: '信息获取',
        icon: `${ICON_CMD}/navi/grab_info.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: 'RSS',
          },
          {
            id: uid.gen(),
            title: '电子邮件',
          },
          {
            id: uid.gen(),
            title: '播客',
          },
          {
            id: uid.gen(),
            title: '搜索引擎',
          },
        ],
      },
      {
        id: uid.gen(),
        title: '设计 / 资源',
        icon: `${ICON_CMD}/navi/ruler.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '原型设计',
            icon: `${ICON_CMD}/navi/china.svg`,
          },
          {
            id: uid.gen(),
            title: '幻灯片制作',
            icon: `${ICON_CMD}/navi/china.svg`,
          },
          {
            id: uid.gen(),
            title: '图标',
            icon: `${ICON_CMD}/navi/china.svg`,
          },
          {
            id: uid.gen(),
            title: '配色',
            icon: `${ICON_CMD}/navi/china.svg`,
          },
          {
            id: uid.gen(),
            title: '字体',
            icon: `${ICON_CMD}/navi/china.svg`,
          },
        ],
      },
      {
        id: uid.gen(),
        title: 'AwesomeX',
        icon: `${ICON_CMD}/navi/awesome.svg`,
        childMenu: [],
      },
      {
        id: uid.gen(),
        title: '实用 SaaS', // 建站工具，
        icon: `${ICON_CMD}/navi/cloud.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '建站工具', // wix / wordpress ...
          },
          {
            id: uid.gen(),
            title: '社区工具',
          },
        ],
      },
      {
        id: uid.gen(),
        title: 'web 开发',
        icon: `${ICON_CMD}/navi/webapp.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '开发语言',
          },
          {
            id: uid.gen(),
            title: 'UI 框架',
          },
          {
            id: uid.gen(),
            title: 'WebAssembly',
          },
          {
            id: uid.gen(),
            title: 'Web 动画',
          },
          {
            id: uid.gen(),
            title: '数据可视化',
          },
          {
            id: uid.gen(),
            title: 'VR / AR',
          },
          {
            id: uid.gen(),
            title: '富文本编辑器',
          },
          {
            id: uid.gen(),
            title: 'Web 3.0',
          },
          {
            id: uid.gen(),
            title: '奇奇怪怪',
          },
        ],
      },
      {
        id: uid.gen(),
        title: '人工智能',
        icon: `${ICON_CMD}/navi/ai.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '机器学习',
          },
          {
            id: uid.gen(),
            title: '自然语言处理',
          },
          {
            id: uid.gen(),
            title: '语音识别',
          },
          {
            id: uid.gen(),
            title: '信息检索与推荐',
          },
        ],
      },
      {
        id: uid.gen(),
        title: '公共数据',
        icon: `${ICON_CMD}/navi/data.svg`,
      },
      {
        id: uid.gen(),
        title: '区块链', // or move to 基础设施 ?
        icon: `${ICON_CMD}/navi/block-chain.svg`,
        childMenu: [],
      },
      {
        id: uid.gen(),
        title: '隐私 / 安全',
        icon: `${ICON_CMD}/navi/safe.svg`,
        childMenu: [],
      },
      {
        id: uid.gen(),
        title: '运营分析',
        icon: `${ICON_CMD}/navi/monitor.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '访问统计',
          },
          {
            id: uid.gen(),
            title: '问卷调查',
          },
        ],
      },
      {
        id: uid.gen(),
        title: '多媒体',
        icon: `${ICON_CMD}/navi/media.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '视频',
          },
          {
            id: uid.gen(),
            title: '音频',
          },
        ],
      },
      {
        id: uid.gen(),
        title: '基础设施', // 操作系统，数据库，网络协议，编程语言，重要算法。等等
        icon: `${ICON_CMD}/navi/infra.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '操作系统',
          },
          {
            id: uid.gen(),
            title: '数据库',
          },
          {
            id: uid.gen(),
            title: '编程语言',
          },
          {
            id: uid.gen(),
            title: '云服务', // CDN, 云主机， 等等
          },
          {
            id: uid.gen(),
            title: '区块链',
          },
        ],
      },
    ],
  },
  {
    // 非 IT，设计类的网站
    id: uid.gen(),
    title: '设计灵感',
    icon: `${ICON_CMD}/navi/light.svg`,
    childMenu: [
      {
        id: uid.gen(),
        title: '科幻世界',
        icon: `${ICON_CMD}/navi/sci-fi.svg`,
        displayType: 'IMAGE',
      },
      {
        id: uid.gen(),
        title: '建筑之美',
        icon: `${ICON_CMD}/navi/bricks.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '宗教建筑',
          },
          {
            id: uid.gen(),
            title: '乡村',
          },
          {
            id: uid.gen(),
            title: '城市地标',
          },
          {
            id: uid.gen(),
            title: '竞技场',
          },
          {
            id: uid.gen(),
            title: '博物馆',
          },
          {
            id: uid.gen(),
            title: '火车站',
          },
          {
            id: uid.gen(),
            title: '桥梁',
          },
          {
            id: uid.gen(),
            title: '未来主义',
          },
          {
            id: uid.gen(),
            title: '奇奇怪怪',
          },
        ],
      },
      {
        id: uid.gen(),
        title: '公共空间',
        icon: `${ICON_CMD}/navi/space_in.svg`,
        childMenu: [
          {
            id: uid.gen(),
            // https://www.zhihu.com/search?type=content&q=%E5%9B%BE%E4%B9%A6%E9%A6%86%20%E5%86%85%E9%83%A8%E8%AE%BE%E8%AE%A1
            title: '图书馆',
          },
          {
            id: uid.gen(),
            title: '餐厅', // 酒店内，游艇内，等等, google、亚马逊，微软 办公室等等
          },
          {
            id: uid.gen(),
            title: '办公室', // google、亚马逊，微软 办公室等等
          },
          {
            id: uid.gen(),
            title: '美剧布景',
          },
          {
            id: uid.gen(),
            title: '宫殿',
          },
          {
            id: uid.gen(),
            title: '会展中心',
          },
          {
            id: uid.gen(),
            title: '超级工厂',
          },
          {
            id: uid.gen(),
            title: '飞机场',
          },
        ],
      },
      {
        id: uid.gen(),
        title: '服饰控',
        icon: `${ICON_CMD}/navi/cloth.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '中国风',
          },
          {
            id: uid.gen(),
            title: '古罗马',
          },
          {
            id: uid.gen(),
            title: '军装',
          },
        ],
      },
      {
        id: uid.gen(),
        title: '文字与排版',
        icon: `${ICON_CMD}/navi/text.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '文章排版',
          },
          {
            id: uid.gen(),
            title: '店铺招牌',
          },
          {
            id: uid.gen(),
            title: '标语条幅', // 脱欧大巴等等
          },
          {
            id: uid.gen(),
            title: '车机系统',
          },
        ],
      },
      {
        id: uid.gen(),
        title: 'LOGO',
        icon: `${ICON_CMD}/navi/logo.svg`,
      },
      {
        id: uid.gen(),
        title: 'Pattens',
        icon: `${ICON_CMD}/navi/pattern.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '地毯',
          },
          {
            id: uid.gen(),
            title: '彩色玻璃',
          },
          {
            id: uid.gen(),
            title: '背景图案',
          },
          {
            id: uid.gen(),
            title: '微生物',
          },
          {
            id: uid.gen(),
            title: '滑雪 | 冲浪板',
          },
          {
            id: uid.gen(),
            title: '足球',
          },
          {
            id: uid.gen(),
            title: '迷彩',
          },
          {
            id: uid.gen(),
            title: '雪花',
          },
          {
            id: uid.gen(),
            title: '宇宙空间',
          },
          {
            id: uid.gen(),
            title: '奇奇怪怪',
          },
        ],
      },
      {
        id: uid.gen(),
        title: '创意广告',
        icon: `${ICON_CMD}/navi/ad.svg`,
      },
      {
        id: uid.gen(),
        title: '工业设计',
        icon: `${ICON_CMD}/navi/industry_design.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '日用品',
          },
          {
            id: uid.gen(),
            title: '球鞋',
          },
          {
            id: uid.gen(),
            title: '奇奇怪怪',
          },
        ],
      },
      {
        id: uid.gen(),
        title: '机械迷',
        icon: `${ICON_CMD}/navi/mechanical.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '汽车', // 工程车，特种车，F1...
          },
          {
            id: uid.gen(),
            title: '摩托',
          },
          {
            id: uid.gen(),
            title: '航天器', // 月球车
          },
          {
            id: uid.gen(),
            title: '战斗机',
          },
          {
            id: uid.gen(),
            title: '发动机',
          },
          {
            id: uid.gen(),
            title: '奇奇怪怪',
          },
        ],
      },
      {
        id: uid.gen(),
        title: '网站 / App',
        icon: `${ICON_CMD}/navi/webapp.svg`,
      },
      {
        id: uid.gen(),
        title: '奇奇怪怪',
        icon: `${ICON_CMD}/navi/others.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '地图控',
          },
          {
            id: uid.gen(),
            title: '车机系统',
          },
          {
            id: uid.gen(),
            title: '涂鸦',
          },
          {
            id: uid.gen(),
            title: '井盖',
          },
        ],
      },
    ],
  },
  {
    id: uid.gen(),
    title: '酷团队',
    icon: `${ICON_CMD}/navi/group.svg`,
    childMenu: [],
  },
  {
    id: uid.gen(),
    title: '播客集',
    icon: `${ICON_CMD}/navi/podcast.svg`,
    childMenu: [
      {
        id: uid.gen(),
        title: '技术类',
        icon: `${ICON_CMD}/navi/tips.svg`,
      },
      {
        id: uid.gen(),
        title: '设计类',
        icon: `${ICON_CMD}/navi/tips.svg`,
      },
      {
        id: uid.gen(),
        title: '杂谈类',
        icon: `${ICON_CMD}/navi/tips.svg`,
      },
    ],
  },
  {
    id: uid.gen(),
    title: '教程 / 翻译', // 技术书籍，中文文档, 翻译文章, 国外网校, 比如 https://web.stanford.edu/class/cs224n/
    icon: `${ICON_CMD}/navi/glasses.svg`,
    childMenu: [
      {
        id: uid.gen(),
        title: '前端',
        icon: `${ICON_CMD}/navi/translate.svg`,
      },
      {
        id: uid.gen(),
        title: 'iOS',
        icon: `${ICON_CMD}/navi/translate.svg`,
      },
      {
        id: uid.gen(),
        title: 'Android',
        icon: `${ICON_CMD}/navi/translate.svg`,
      },
      {
        id: uid.gen(),
        title: '后端',
        icon: `${ICON_CMD}/navi/translate.svg`,
      },
      {
        id: uid.gen(),
        title: '设计',
        icon: `${ICON_CMD}/navi/translate.svg`,
      },
      {
        id: uid.gen(),
        title: '产品',
        icon: `${ICON_CMD}/navi/translate.svg`,
      },
      {
        id: uid.gen(),
        title: '中文文档',
        icon: `${ICON_CMD}/navi/translate.svg`,
      },
      {
        id: uid.gen(),
        title: '奇奇怪怪',
        icon: `${ICON_CMD}/navi/others.svg`,
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
    id: uid.gen(),
    title: '计算机名人堂',
    icon: `${ICON_CMD}/navi/famous.svg`,
    childMenu: [
      {
        id: uid.gen(),
        title: '图灵奖',
        displayType: 'FAME_PEOPLE',
        icon: `${ICON_CMD}/navi/hammer.svg`,
      },
      {
        id: uid.gen(),
        title: 'TopCoder',
        icon: `${ICON_CMD}/navi/hammer.svg`,
      },
      {
        id: uid.gen(),
        title: '语言之父',
        icon: `${ICON_CMD}/navi/hammer.svg`,
      },
      {
        id: uid.gen(),
        title: '学界',
        icon: `${ICON_CMD}/navi/hammer.svg`,
      },
      {
        id: uid.gen(),
        title: '工业界',
        icon: `${ICON_CMD}/navi/hammer.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '前端',
            icon: `${ICON_CMD}/navi/hammer.svg`,
          },
          {
            id: uid.gen(),
            title: '后端',
            icon: `${ICON_CMD}/navi/hammer.svg`,
          },
          {
            id: uid.gen(),
            title: 'xx端',
            icon: `${ICON_CMD}/navi/hammer.svg`,
          },
        ],
      },
      {
        id: uid.gen(),
        title: '黑客',
        icon: `${ICON_CMD}/navi/hammer.svg`,
      },
    ],
  },
  {
    id: uid.gen(),
    title: '独立开发者',
    icon: `${ICON_CMD}/navi/hammer.svg`,
    childMenu: [],
  },
  {
    id: uid.gen(),
    title: '命令行',
    icon: `${ICON_CMD}/navi/shell.svg`,
    childMenu: [],
  },
  {
    id: uid.gen(),
    title: '酷发明',
    icon: `${ICON_CMD}/navi/experiment.svg`,
    childMenu: [],
  },
  {
    id: uid.gen(),
    title: '值得关注',
    icon: `${ICON_CMD}/navi/subscribe.svg`,
    childMenu: [
      {
        id: uid.gen(),
        title: 'NewsLetter',
        icon: `${ICON_CMD}/navi/subscribe.svg`,
      },
      {
        id: uid.gen(),
        title: 'Medium',
        icon: `${ICON_CMD}/navi/medium.svg`,
      },
      {
        id: uid.gen(),
        title: 'Twitter',
        icon: `${ICON_CMD}/navi/twitter.svg`,
      },
      {
        id: uid.gen(),
        title: '知乎专栏',
        icon: `${ICON_CMD}/navi/zhihu.svg`,
      },
      {
        id: uid.gen(),
        title: '独立博客',
        icon: `${ICON_CMD}/navi/blog.svg`,
      },
      {
        id: uid.gen(),
        title: '泛科技媒体',
        icon: `${ICON_CMD}/navi/newspaper.svg`,
      },
    ],
  },
  {
    id: uid.gen(),
    title: '影剧 / Talks',
    icon: `${ICON_CMD}/navi/movie.svg`,
    childMenu: [],
  },
  {
    id: uid.gen(),
    title: '应用数学',
    icon: `${ICON_CMD}/navi/math.svg`,
    childMenu: [
      {
        id: uid.gen(),
        title: '找龙哥咨询',
        icon: `${ICON_CMD}/navi/movie.svg`,
        childMenu: [],
      },
    ],
  },
  {
    id: uid.gen(),
    title: '新世界', // 非工具类的社区等
    icon: `${ICON_CMD}/navi/gate.svg`,
    childMenu: [
      {
        id: uid.gen(),
        title: '无人机',
        icon: `${ICON_CMD}/navi/drone.svg`,
      },
      {
        id: uid.gen(),
        title: '建筑设计',
        icon: `${ICON_CMD}/navi/china.svg`,
      },
      {
        id: uid.gen(),
        title: '行业软件',
        icon: `${ICON_CMD}/navi/china.svg`,
        childMenu: [
          {
            id: uid.gen(),
            title: '模型仿真',
            icon: `${ICON_CMD}/navi/china.svg`,
          },
          {
            id: uid.gen(),
            title: 'CAD制作',
            icon: `${ICON_CMD}/navi/china.svg`,
          },
        ],
      },
      {
        id: uid.gen(),
        title: '奇奇怪怪',
        icon: `${ICON_CMD}/navi/others.svg`,
      },
    ],
  },
  {
    id: uid.gen(),
    title: 'Sports Team',
    icon: `${ICON_CMD}/navi/sport.svg`,
    childMenu: [
      {
        id: uid.gen(),
        title: '足球',
        icon: `${ICON_CMD}/navi/sport.svg`,
      },
      {
        id: uid.gen(),
        title: '篮球',
        icon: `${ICON_CMD}/navi/sport.svg`,
      },
    ],
  },
]

export default menu
