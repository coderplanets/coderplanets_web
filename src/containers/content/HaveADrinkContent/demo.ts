import { ASSETS_ENDPOINT, ICON_CMD } from '@/config'

const demo = [
  {
    id: '0',
    icon: `${ICON_CMD}/drink/egg.svg`,
    title: '魔鬼细节',
    desc: '各种产品或服务中的彩蛋和用心细节，情怀改变世界。',
    upvoteAlias: '爱了',
    entries: [
      {
        text: 'CoderPlanets 的 Upvote 默认文案是「某某」觉得很赞，但在不同的板块中也会根据内容显示为：喜欢、赞同、惊呆了、干了、有感觉、学到了、回血了、吐了等等',
        reference: '',
        images: [],
      },
      {
        text: 'CoderPlanets 的用户在不同子社区中有对应的昵称，比如在首页叫 CPer，在 Elixir 社区叫 Alchemist， 在 Rust 社区叫  Rustacean 等等。',
        reference: 'https://coderplanets.com/elixir',
      },
      {
        text: 'CoderPlanets 评论表情包中的感谢概念，是一个由爱心抽象出来的大螃蟹钳子，谐音为「谢谢」。',
        images: [`${ASSETS_ENDPOINT}/ugc/tmp/drink-crabheart.png`],
        imageSize: 'small',
      },
      {
        text: 'CoderPlanets 中的链接分享，除了常见的第三方社交平台，还有程序员常用的 Markdown，Org-Mode 等格式。',
      },
      {
        text: 'CoderPlanets 遵循中文排版原则，后端会自动为中英文间插入空格，中文的引号转义为「」等等。',
      },
      {
        text: 'CoderPlanets 会员升级页面的招呼「你好哇」，来自「程序员」王小波给李银河的情书集 —《爱你就像爱生命》。',
        reference: 'https://coderplanets.com/membership',
      },
      {
        text: 'CoderPlanets 的前端没有使用任何流行的「UI 组件库」，几乎所有组件都是量身定制，基本上没有撞衫的可能。',
      },
    ],
  },
  {
    id: '1',
    icon: `${ICON_CMD}/drink/freeze.svg`,
    title: 'IT 冷知识',
    desc: 'IT 发展史上少为人知的奇闻轶事，散落天涯的江湖传说。',
    upvoteAlias: '学到了',
    entries: [
      {
        text: 'MySQL 的 My 是创始人 Michael Widenius 之女的名字，不是「我的」',
        reference: 'https://en.wikipedia.org/wiki/MySQL',
        images: [],
      },
      {
        text: 'Wiki 不是英语，它源自夏威夷语，意思是 fast, quick',
        reference: 'https://www.dictionary.com/e/wikileaks-wikipedia/',
      },
      {
        text: '图像处理算法中使用最广的一幅图片来自《花花公子》杂志',
        reference: 'https://en.wikipedia.org/wiki/Lenna',
        images: [`${ASSETS_ENDPOINT}/ugc/tmp/drink_1.jpg`],
      },
      {
        text: '早期限于算力，都是用这种没有存储和 OS 的设备连接到中央计算机，现在我们使用的 Terminal 概念就来源于此。',
        reference: 'https://qr.ae/pGmnPF',
        images: [`${ASSETS_ENDPOINT}/ugc/tmp/Pasted Graphic.png`],
      },
    ],
  },
  {
    id: '2',
    icon: `${ICON_CMD}/drink/driver.svg`,
    title: '可视化段子',
    desc: '自黑自嘲自爱自爆，程序员趣图，IT / 职场各种梗图',
    upvoteAlias: '喜欢',
    entries: [
      {
        text: '抱歉，该条目下还没有内容，欢迎任何形式的参与',
      },
    ],
  },
  {
    id: '3',
    icon: `${ICON_CMD}/drink/chart.svg`,
    title: '数据酷',
    desc: '数据胜千言，Data 会说话。',
    upvoteAlias: '喜欢',
    entries: [
      {
        num: '755',
        unit: '万',
        reference:
          'https://octoverse.github.com/#lets-look-back-at-the-code-and-communities-built-on-git-hub-this-year',
        text: '根据 2021 Github Octoverse 公布的数据，全球共有 7300 万用户，其中中国开发者 755 万， 位居全球第二，仅次于美国的 1350 万。',
      },
      {
        num: '217',
        unit: '个',
        reference: 'https://github.com/e3b0c442/keywords',
        text: '据统计主流语言中关键字数目最多的是 Visual Basic，其包含 217 个语言关键字, 最少的是 Elixir, 数量为 15 个。',
      },
      {
        num: '3500',
        unit: '个',
        reference:
          'https://www.cnbc.com/2021/10/05/tesla-shares-higher-in-past-month-oppenheimer-charts-stock-moves.html?utm_term=Autofeed&utm_medium=Social&utm_content=Main&utm_source=Twitter#Echobox=1633454183',
        text: '据 CNBC 采访报道，每辆特斯拉有 3500 个或更多芯片，而传统引擎有 1000 个芯片。',
      },
      {
        num: '64.67',
        unit: '%',
        reference:
          'https://gs.statcounter.com/browser-market-share#monthly-202106-202106-bar',
        text: '截止 2021 年底，Google 的 Chrome 浏览器已占据超 6 成全球浏览器市场份额，苹果的 Safari(18.3%) 和 微软的 Edge(3.4%) 分列 2，3 位。',
      },
    ],
  },
  {
    id: '4',
    icon: `${ICON_CMD}/drink/naming.svg`,
    title: '传神命名',
    desc: '工业界，工作中的那些优雅传神的命名和概念。',
    upvoteAlias: '喜欢',
    entries: [
      {
        title: 'Tree-Shaking',
        text: '通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code) — 即通过「摇树」把多余的叶子摇下来 ~',
        reference: 'https://webpack.js.org/guides/tree-shaking/',
      },
      {
        title: 'Bread Crumbs',
        text: '网站上常见的「面包屑」导航。这个概念来自于儿童故事《糖果屋》，他们留下实实在在的面包屑来找到回家的路。',
        reference: 'https://www.inlife.co.uk/why-are-cookies-called-cookies/',
      },
      {
        title: 'Tor',
        text: 'The Onion Router, 洋葱路由的缩写, 它使用像洋葱一样的层状模型保证了匿名和不可追踪，是「暗网」的基础设施之一。',
        reference: 'https://zh.wikipedia.org/wiki/Tor',
      },
      {
        title: 'Cookies',
        text: 'Cookies, 网站用于追踪用户行踪的一种机制，就像可以通过分析地上的曲奇饼干碎找出你去过那些地方一样。',
        reference: 'https://zh.wikipedia.org/zh-hans/Cookie',
      },
      {
        title: 'Googol',
        text: 'Google 名称的来源，指的是 10 的 100 次幂，用来代表在互联网上可以获得的海量的资源。',
      },
      {
        title: 'Batteries Included',
        text: '意指一件产品包含了所有必要的东西，开箱即用，最早来源于 Python 社区。',
        reference: 'https://qr.ae/pGmyXB',
      },
      {
        title: 'Snowflake ID',
        text: 'Twitter 开发的用于标识 tweets 的分布式算法，特点之一是发布时间相近的 tweet, 其生成的 ID 也相近。',
        reference: 'https://en.wikipedia.org/wiki/Snowflake_ID',
      },
    ],
  },
  {
    id: '5',
    icon: `${ICON_CMD}/drink/tu.png`,
    title: '流氓产品',
    desc: '互联网厕所，专门记录那些令人作呕的产品及使用体验。',
    upvoteAlias: '吐了',
    entries: [
      {
        text: 'CS*N 会在用户访问该网站后下起满屏幕的红包雨。',
        images: [`${ASSETS_ENDPOINT}/ugc/tmp/drink_4.png`],
      },
    ],
  },
  {
    id: '6',
    icon: `${ICON_CMD}/drink/muscle.svg`,
    title: '励志柴油',
    desc: '免费加油站，比鸡汤更励志，比汽油劲更大。',
    upvoteAlias: '回血了',
    entries: [
      {
        text: '有梦就去追，没死就别停!',
      },
      {
        text: 'You got a dream, you got to protect it. People can’t do something themselves, they want to tell you you can’t do it. You want something, go get it. Period.',
        reference:
          'https://www.goodreads.com/author/quotes/7242582.Pursuit_of_Happyness',
      },
      {
        text: '遇到闪电记得要微笑，因为那是天空在给你拍照。',
      },
    ],
  },
  {
    id: '7',
    icon: `${ICON_CMD}/drink/magic-trick.svg`,
    title: 'Oh My Lang',
    desc: '各种小众语言的巧妙设计有趣特性 ~',
    upvoteAlias: '学到了',
    entries: [
      {
        text: '抱歉，该条目下还没有内容，欢迎任何形式的参与',
      },
    ],
  },
  {
    id: '8',
    icon: `${ICON_CMD}/drink/desk-lamp.svg`,
    title: '晒工台',
    desc: '工作台与装备展示，极客的 DeskPorn ~ ',
    upvoteAlias: '喜欢',
    entries: [
      {
        text: '抱歉，该条目下还没有内容，欢迎任何形式的参与',
      },
    ],
  },
  {
    id: '9',
    icon: `${ICON_CMD}/drink/number.svg`,
    title: 'APP 下架奇谈',
    desc: '应用市场那些奇葩诡异、莫名其妙、哭笑不得的被拒理由。 ',
    upvoteAlias: '惊呆了',
    entries: [
      {
        text: '抱歉，该条目下还没有内容，欢迎任何形式的参与',
      },
    ],
  },
  {
    id: '10',
    icon: `${ICON_CMD}/drink/editor.svg`,
    title: '编辑器圣战',
    desc: '晒主题，分享配置，使用技巧。',
    upvoteAlias: '喜欢',
    entries: [
      {
        text: '抱歉，该条目下还没有内容，欢迎任何形式的参与',
      },
    ],
  },
  {
    id: '11',
    icon: `${ICON_CMD}/drink/chicken.svg`,
    title: '毒鸡汤',
    desc: '好喝没营养，一直喝一直爽。',
    upvoteAlias: '干了',
    entries: [
      {
        text: '看见一个算命大师，我刚坐下他就问我，你算什么东西？',
      },
      {
        text: '凡事有得必有失，你看，我得到了钱，就失去了痛苦。',
      },
      {
        text: '一个人如果没有梦想，跟无忧无虑有什么区别呢？',
      },
      {
        text: '比你优秀的人还在努力，你努力有什么用呢？',
      },

      {
        text: '不要看别人表面上一帆风顺，实际上他们背地里，也是一帆风顺。',
      },
      {
        text: '哪有什么选择恐惧症，还不是因为穷。',
      },
      {
        text: '长得丑就是病，不然整形医院怎么叫医院。',
      },
      {
        text: '做事一定要考虑别人的感受，千万不能让他们太开心了。',
      },
      {
        text: '昨天我去看心理医生，医生说我不是抑郁症，我是真的惨。',
      },
      {
        text: '最好别收拾房间，当房间收拾干净时，你就是房间里唯一的垃圾。',
      },
      {
        text: '只要坚持不走出舒适圈，你就能一直舒适下去。',
      },
      {
        text: '找对象的时候，不要光看对方外表，得先看看自己外表',
      },
      {
        text: '遇到你之前，我的世界是黑白的，遇见你之后全黑了。',
      },
      {
        text: '因为没有钱才上班，现在上了班也没钱，难道有中间商赚差价？',
      },
      {
        text: '以前十块钱能买很多东西，现在不行了，有监控。',
      },
    ],
  },

  {
    id: '12',
    icon: `${ICON_CMD}/drink/talk.svg`,
    title: '言论收集簿',
    desc: '各大社交平台上给人启发思考的见解言论。',
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
    icon: `${ICON_CMD}/drink/cupid.svg`,
    title: '交个朋友',
    desc: '不是直播间，是化学实验室 ❤️',
    upvoteAlias: '有感觉',
    entries: [
      {
        text: '我是成华区小龙女，羽毛球爱好者，爱做饭但不爱吃饭。',
        reference: '',
        images: [`${ASSETS_ENDPOINT}/ugc/tmp/drink_gugu.png`],
      },
      {
        text: '我是高新区杨过，喜欢骑车，爱好科幻，很高兴认识你。',
        reference: '',
        images: [`${ASSETS_ENDPOINT}/ugc/tmp/drink_yangguo.png`],
      },
    ],
  },
]

export default demo
