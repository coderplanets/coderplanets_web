import { ICON_CMD } from '@/config'

const demo = [
  {
    id: '0',
    icon: `${ICON_CMD}/drink/it-cold.svg`,
    title: '魔鬼细节',
    total: '224',
    desc: '各种产品或服务中的彩蛋和用心细节，情怀改变世界。',
    updatedAt: '3天前',
    upvoteAlias: '爱了',
    entries: [
      {
        text: '本站的 Upvote 默认文案是「某某」觉得很赞，但在不同的板块中也会根据内容显示为：喜欢、赞同、惊呆了、干了、有感觉、学到了、回血了、很酷、吐了等等',
        reference:
          'https://www.quora.com/Why-is-the-terminal-in-Linux-or-MacOSX-called-Terminal',
        images: [],
      },
      {
        text: '本站的地图分布模块，不同的社区对于成员有不同的昵谓，比如在首页叫 CPer,  Elixir 社区叫 Alchemist， Rust 社区叫  Rustacean 等等。',
      },
      {
        text: '本站评论表情包中的感谢，是一个由爱心抽象出来的大螃蟹钳子，寓意「谢谢」。',
      },
      {
        text: '本站的分享模块，除了常见的第三方社交平台，还有程序员常用的 MD, 以及 Org-Mode 格式。',
      },
      {
        text: '本站遵循中文排版原则，后端会自动为中英文间插入空格，中文的引号转义为「」等等。',
      },
      {
        text: '本站开发时没有使用任何流行的「UI组件库」，几乎所有模块都是量身定制。',
      },
    ],
  },
  {
    id: '1',
    icon: `${ICON_CMD}/drink/it-cold.svg`,
    title: 'IT 冷知识',
    total: '224',
    desc: 'IT 发展史上少为人知的奇闻轶事，散落天涯的江湖传说。',
    updatedAt: '3天前',
    upvoteAlias: '学到了',
    entries: [
      {
        text: '图像处理算法中使用最广的一幅图片来自《花花公子》杂志',
        reference:
          'https://www.quora.com/Why-is-the-terminal-in-Linux-or-MacOSX-called-Terminal',
        images: [],
      },
      {
        text: 'why called Terminal',
        reference: '',
        images: [],
      },
      {
        text: 'why called MySQL',
        reference: '',
        images: [],
      },
      {
        text: 'why called Wiki',
        reference: '',
        images: [],
      },
    ],
  },
  {
    id: '2',
    icon: `${ICON_CMD}/drink/driver.svg`,
    title: '可视化段子',
    total: '224',
    desc: '自黑自嘲自爱自爆，程序员趣图，IT / 职场各种梗图',
    updatedAt: '3天前',
    upvoteAlias: '喜欢',
  },
  {
    id: '3',
    icon: `${ICON_CMD}/drink/number.svg`,
    title: '数据酷',
    total: '224',
    desc: '数据胜千言，Data 会说话。',
    updatedAt: '3天前',
    upvoteAlias: '喜欢',
  },
  {
    id: '4',
    icon: `${ICON_CMD}/drink/naming.svg`,
    title: '传神命名',
    total: '224',
    desc: '工业界，工作中的那些优雅传神的命名和概念。',
    updatedAt: '3天前',
    upvoteAlias: '喜欢',
    entries: [
      {
        text: 'why called Tree-Shaking',
        reference: '',
      },
      {
        text: 'why called Cookies',
        reference: '',
      },
      {
        text: 'why called Tor',
        reference: '',
      },
      {
        text: 'why called Google',
        reference: '',
      },
    ],
  },
  {
    id: '5',
    icon: `${ICON_CMD}/drink/rap.svg`,
    title: '流氓产品',
    total: '22',
    desc: '互联网厕所，专门记录那些令人作呕的产品及使用体验。',
    updatedAt: '3天前',
    upvoteAlias: '吐了',
    entries: [
      {
        text: 'CSDN red-poket rain',
        reference: '',
      },
    ],
  },
  {
    id: '6',
    icon: `${ICON_CMD}/drink/muscle.svg`,
    title: '励志柴油',
    total: '224',
    desc: '免费加油站，比鸡汤更励志，比汽油劲更大。',
    updatedAt: '3天前',
    upvoteAlias: '回血了',
    entries: [
      {
        text: 'People can t do something themselfs, they',
        reference: '',
      },
    ],
  },
  {
    id: '7',
    icon: `${ICON_CMD}/drink/zhihu.svg`,
    title: 'Oh My Lang',
    total: '224',
    desc: '各种小众语言的巧妙设计有趣特性 ~',
    updatedAt: '3天前',
    upvoteAlias: '学到了',
    entries: [
      {
        text: 'Elixir 中, Pipe',
        reference: '',
      },
    ],
  },
  {
    id: '8',
    icon: `${ICON_CMD}/drink/smile.svg`,
    title: '晒工台',
    total: '224',
    desc: '工作台与装备展示，极客的 DeskPorn ~ ',
    updatedAt: '3天前',
    upvoteAlias: '喜欢',
    entries: [
      {
        text: 'Awesome',
        reference: '',
        images: [],
      },
    ],
  },
  {
    id: '9',
    icon: `${ICON_CMD}/drink/brain.svg`,
    title: 'APP 下架奇谈',
    total: '224',
    desc: '应用市场那些奇葩诡异、莫名其妙、哭笑不得的被拒理由。 ',
    updatedAt: '3天前',
    upvoteAlias: '惊呆了',
    entries: [
      {
        text: 'Fuck',
        reference: '',
        images: [],
      },
    ],
  },
  {
    id: '10',
    icon: `${ICON_CMD}/drink/chicken.svg`,
    title: '编辑器圣战',
    total: '224',
    desc: '晒主题，分享配置，使用技巧。',
    updatedAt: '3天前',
    upvoteAlias: '喜欢',
    entries: [
      {
        text: 'Awesome',
        reference: '',
        images: [],
      },
    ],
  },
  {
    id: '11',
    icon: `${ICON_CMD}/drink/chicken.svg`,
    title: '毒鸡汤',
    total: '224',
    desc: '好喝没营养，一直喝一直爽。',
    updatedAt: '3天前',
    upvoteAlias: '干了',
    entries: [
      {
        text: '看见一个算命大师，我刚坐下他就问我，你算什么东西？',
      },
      {
        text: '一个人如果没有梦想，跟无忧无虑有什么区别呢？',
      },
      {
        text: '比你优秀的人还在努力，你努力有什么用呢？',
      },
    ],
  },

  {
    id: '12',
    icon: `${ICON_CMD}/drink/rap.svg`,
    title: '言论收集簿',
    total: '22',
    desc: '各大社交平台上给人启发思考的见解言论。',
    updatedAt: '3天前',
    upvoteAlias: '赞同',
    entries: [
      {
        text: 'Google 退出中国，百度是最大的受害者。',
        reference: '',
      },
    ],
  },
  {
    id: '13',
    icon: `${ICON_CMD}/drink/rap.svg`,
    title: '交个朋友',
    total: '22',
    desc: '不是直播间，是化学实验室 ❤️',
    upvoteAlias: '有感觉',
    updatedAt: '3天前',
    entries: [
      {
        text: '成华区小龙女',
        reference: '',
        images: [],
      },
    ],
  },
]

export default demo
