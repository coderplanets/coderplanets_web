
<div align="center">
  <a href="https://travis-ci.org/mydearxym/mastani" target="_blank">
    <img src="https://travis-ci.org/mydearxym/mastani.svg" alt="Build Status" />
  </a>

  <a href='https://coveralls.io/github/mydearxym/mastani?branch=dev' target="_blank">
    <img
    src='https://coveralls.io/repos/github/mydearxym/mastani/badge.svg?branch=dev'
    alt='Coverage Status' />
  </a>

  <a href="https://greenkeeper.io" target="_blank">
    <img src="https://badges.greenkeeper.io/mydearxym/mastani.svg" alt="greenkeeper enabled" />
  </a>

  <a href="https://david-dm.org/mydearxym/mastani?type=dev" target="_blank">
    <img src="https://david-dm.org/mydearxym/mastani/dev-status.svg" alt="devDependency Status" />
  </a>

  <a href="https://david-dm.org/mydearxym/mastani" target="_blank">
    <img src="https://david-dm.org/mydearxym/mastani.svg" alt="Dependency Status" />
  </a>
  
  <div> work in progress ...</div>
</div>



## GraphQL tools
  [apollo-fetch](https://github.com/apollographql/apollo-fetch)
  [graphql-request](https://github.com/graphcool/graphql-request)
  [组织结构参考](https://github.com/apollographql/GitHunt-React/blob/4bbba0416c666768b375e65221236a736e50e942/ui/graphql/Comment.graphql)


## PostgreSQL
  [查询客户端 franchise](https://github.com/HVF/franchise)

## packages
   [markjs](https://markjs.io/)
   [markdown-it](https://markdown-it.github.io/)
   [Autolinker](https://github.com/gregjacobs/Autolinker.js)

## issues
  next.config.js 如果导出不存在的页面可能会使 build 过程出现奇怪的错误, 如
  polished 报错. 只导出需要的页面

## Feature

- [x] server-side-render out of the box, power by next.js
- [x] elegant front-end ORM layer powered by mobx && mobx-state-tree
- [x] awesome state manage use the full power of Ramada.js && Rx.js
- [x] styled-component as the css solution
- [x] multi language support
- [x] well tested by use jest
- [x] handy generators for quick development
- [x] enjoyable dev experience by using modern web tools
- [ ] email subscribe like [FE/Weekly](http://www.feweekly.com/) for each language?

## TODO

- [ ] phoenix [新文档地址](https://github.com/phoenixframework/phoenix/tree/master/guides/docs)
- [ ] 使用 Github Rest/GraphQl api 摸索数据层方案
- [ ] Search panel && login panel ----> 或许应该叫 UnverisalPanel ? --> 可以呼出
  debug 设置等等
- [ ] [主页弄给](https://github.com/Sly777/ran)
- [ ] add export config docs [see this](https://zhuanlan.zhihu.com/p/27847307)
- [ ] test --> tests
- [ ] add theme checker maybe? -> https://github.com/styled-components/stylelint-processor-styled-components
- [ ] add page generator
- [ ] remove the clock page
- [ ] use bundlesize in Ci . [here](https://github.com/siddharthkp/bundlesize)
- [ ] [react-loadable](https://github.com/thejameskyle/react-loadable)
- [ ] *test Preact in production*
- [ ] docs introduction / file-structure / theme / debug / generator / testing ... see [this](https://github.com/react-boilerplate/react-boilerplate/tree/master/docs)
- [ ] launch first version with changeLog staff
- [ ] and answer [this issue](https://github.com/samuelalvin/react-mobx-mobxstatetree)
- [ ] [防嵌套网页](https://segmentfault.com/a/1190000004502619)
- [ ] [devdocs 的离线缓存怎么做的?](https://devdocs.io/) 弄一个呗
- [x] logic.js generator (only for containers)
- [x] add github example using Rx.js as request lib, GraphQL if time free
- [x] add Ramada example && [bebel-plugin](https://github.com/megawac/babel-plugin-ramda)
- [x] Badges ( CI build / deps / coveralls / greenkeeper)
- [x] prettier config
- [x] styled-component example / polish 
- [x] prettier/lint before commit
- [x] gzip: use a CDN to serve statics 
- [x] plop template 
- [x] change dir stucture for more easy test/code
- [x] intl: rename messages file to lang
- [x] remove the typescript support
- [x] mobx-state-tree by move the shop example
- [x] generator for container and store/
- [x] Jest && Jest as 'cover tool'
- [x] make test a individual dir
- [x] debug pkg
- [x] add global-css ([normalize.css](https://github.com/necolas/normalize.css))
- [x] *design data layer*: [基于 RxJs 的前端数据层实践](https://juejin.im/post/59a7d6d06fb9a0247804f2aa)
- [x] add Menu
- [x] 使用各国标志性的建筑作为 i18n 切换图标


### MindStorm

- [ ] [参考构建桌面版本](https://github.com/egoist/devdocs-desktop)
- [ ] 同色系的彩虹标签？
- [ ] [桌面效果的网站, 有新意](http://jasonpark.me/)
- [ ] [用 monaco-editor实现一个 postman](https://github.com/Microsoft/monaco-editor)
- [ ] [monaco-editor 的 diff-editor 实现协作编辑？ 文档的 wiki 化？](https://github.com/Microsoft/monaco-editor)
- [ ] [react-diagrams](https://github.com/projectstorm/react-diagrams) 


### tools
  #### [git commit emoji](https://github.com/liuchengxu/git-commit-emoji-cn)
  #### [lozad.js](https://github.com/ApoorvSaxena/lozad.js)
  #### [一键分享](https://github.com/overtrue/share.js)
  #### [https://github.com/jawil/blog/issues/10](https://github.com/jawil/blog/issues/10)

### i18n 

0. 修改创建组件的模板
1. 初始加载使用浏览器默认语言 (通过： accept.language(['en', 'zh']), 见官方例子)
2. 后续过程中如果前端 locale 手动改变，则单独请求 locale 文件 (server.js 需要单
   独的 locale 路由)
3. build 的时候用 default-lang.js 脚本生成en/zh.json文件， messages 导出后 key/id 不能重复
4. 逻辑合并到数据流

## ui
  [点击 page 隐藏菜单的思路](https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element)
  [rx + fetch](https://github.com/Cmdv/React-RxJS/blob/836d20a09f66f94db4c3e2206b14b203bf8836a1/src/intent/json-intent.js)

## Roadmap

- [ ] shop example
- [ ] Menu
- [ ] animate, [animate-components](https://github.com/nitin42/animate-components/tree/master/packages/animate-keyframes)


## issue

1. next export 不支持从特定目录导出，所以不能将 ts 的代码集中到一个目录
2. stores 不使用 typescript , see [this issue](https://github.com/mobxjs/mobx-state-tree/issues/276)


## Resources

### Ramada
   [Ramda 中文网](http://ramda.cn/) (简介部分有很多文章)
   [Ramda 函数库参考教程 -- 阮一峰](http://www.ruanyifeng.com/blog/2017/03/ramda.html)
   [Pointfree 编程风格指南](http://www.ruanyifeng.com/blog/2017/03/pointfree.html)
   [Thinking in Ramda: 函数组合 -> 投票的例子不错](https://adispring.coding.me/2017/06/10/Thinking-in-Ramda-Combining-Functions/) --
   R.and / R.or / R.complement 分别是函数版本的 and / or / !
   [Thinking in Ramda: 控制流](https://adispring.coding.me/2017/06/11/Thinking-in-Ramda-Declarative-Programming/)

   [Thinking in Ramda: 重构的例子，涉及很多对象的操作例子](https://adispring.coding.me/2017/06/16/Thinking-in-Ramda-Immutability-and-Objects/) --
   evolve 太酷了.. 数组对应的是 adjust , 以及更通用的 lens 系列
   [Thinking in Ramda: Lens](https://adispring.coding.me/2017/06/18/Thinking-in-Ramda-Lenses/)

   
   ```js
   const lineWidth = settings.lineWidth || 80
   const lineWidth = defaultTo(80, settings.lineWidth)
   ```


### rx.js
  [interactive Rx](http://rxmarbles.com/)
  [categories-of-operators](http://reactivex.io/rxjs/manual/overview.html#categories-of-operators)
  [使用 RxJS 构造复杂单页应用的数据逻辑](https://github.com/xufei/blog/issues/38)
  [RxJS 入门指引和初步应用](https://github.com/xufei/blog/issues/44)
  [单页应用的数据流方案探索](https://github.com/xufei/blog/issues/47)
  [复杂单页应用的数据层设计](https://github.com/xufei/blog/issues/42)

### mobx
  [mobx-share (mobx 知识结构)](https://ckinmind.github.io/mobx-share/)
  
### jest
  [Running Jest Tests Before Each Git Commit](https://benmccormick.org/2017/02/26/running-jest-tests-before-each-git-commit/)

### styled-component
  [styled-component](https://www.styled-components.com/docs)

### example
  [react-typescript-samples](https://github.com/Lemoncode/react-typescript-samples)
  [typescript-react-mobx-template](https://github.com/dimafeng/typescript-react-mobx-template)

### js/css tips
  [小 tip:CSS vw让overflow:auto页面滚动条出现时不跳动](http://www.zhangxinxu.com/wordpress/2015/01/css-page-scrollbar-toggle-center-no-jumping/)
  [基于vw等viewport视区单位配合rem响应式排版和布局](http://www.zhangxinxu.com/wordpress/2016/08/vw-viewport-responsive-layout-typography/)
  [小tip:JS前端创建html或json文件并浏览器导出下载](http://www.zhangxinxu.com/wordpress/2017/07/js-text-string-download-as-html-json-file/)


## talk idea
  0. 就像混泥土 -- 盖小房子随便配比 --- 但是改三峡大坝可就不行了
  1. [香港笼屋](https://www.zhihu.com/question/19757290)

  

