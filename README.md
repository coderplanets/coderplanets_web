## Feature

- [x] server-side-render out of the box, power by next.js
- [x] elegant front-end ORM layer powered by mobx && mobx-state-tree
- [x] awesome state manage use the full power of Ramada.js && Rx.js
- [x] styled-component as the css solution
- [x] multi language support
- [x] well tested by use jest
- [x] handy generators for quick development
- [x] enjoyable dev experience by using modern web tools

## TODO

- [x] add GreenKeeper
- [x] add prettier config
- [x] styled-component example / polish 
- [x] prettier/lint before commit
- [x] gzip: use a CDN to serve statics 
- [x] plop template 
- [x] change dir stucture for more easy test/code
- [x] intl: rename messages file to lang
- [x] remove the typescript support
- [x] mobx-state-tree by move the shop example
- [x] add generator for container and store/
- [x] add Jest && Jest as 'cover tool'
- [x] make test a individual dir
- [x] CI system
- [x] debug pkg
- [ ] use bundlesize in Ci . [here](https://github.com/siddharthkp/bundlesize)
- [ ] logic.js generator (only for containers)
- [ ] add Ramada example && [bebel-plugin](https://github.com/megawac/babel-plugin-ramda)
- [ ] launch first version with changeLog staff
- [ ] [react-loadable](https://github.com/thejameskyle/react-loadable)
- [ ] test Preact
- [ ] *design data layer*: [基于 RxJs 的前端数据层实践](https://juejin.im/post/59a7d6d06fb9a0247804f2aa)


### tools
  #### [git commit emoji](https://github.com/liuchengxu/git-commit-emoji-cn)
  #### [lozad.js](https://github.com/ApoorvSaxena/lozad.js)

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


## talk idea
  0. 就像混泥土 -- 盖小房子随便配比 --- 但是改三峡大坝可就不行了
  1. [香港笼屋](https://www.zhihu.com/question/19757290)

  

