
## TODO

- [x] add GreenKeeper
- [x] add TypeScript
- [x] add prettier config
- [x] styled-component example / polish 
- [x] prettier/lint before commit
- [x] gzip: use a CDN to serve statics 
- [x] plop template 
- [x] change dir stucture for more easy test/code
- [x] intl: rename messages file to lang
- [x] remove the typescript support
- [ ] add Jest && Jest as 'cover tool'
- [ ] make test a individual dir
- [ ] CI system
- [ ] mobx-state-tree by move the shop example with i18n support
- [ ] use bundlesize in Ci . [here](https://github.com/siddharthkp/bundlesize)
- [ ] launch first version with changeLog staff
- [ ] debug pkg
- [ ] add Ramada example
- [ ] [react-loadable](https://github.com/thejameskyle/react-loadable)
- [ ] test Preact
- [ ] *design data layer*: [基于 RxJs 的前端数据层实践](https://juejin.im/post/59a7d6d06fb9a0247804f2aa)


### i18n 

0. 修改创建组件的模板
1. 初始加载使用浏览器默认语言 (通过： accept.language(['en', 'zh']), 见官方例子)
2. 后续过程中如果前端 locale 手动改变，则单独请求 locale 文件 (server.js 需要单
   独的 locale 路由)
3. build 的时候用 default-lang.js 脚本生成en/zh.json文件， messages 导出后 key/id 不能重复
4. 逻辑合并到数据流

## ui
  [点击 page 隐藏菜单的思路](https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element)

## Roadmap

- [ ] shop example
- [ ] Menu
- [ ] animate, [animate-components](https://github.com/nitin42/animate-components/tree/master/packages/animate-keyframes)


## issue

1. next export 不支持从特定目录导出，所以不能将 ts 的代码集中到一个目录
2. stores 不使用 typescript , see [this issue](https://github.com/mobxjs/mobx-state-tree/issues/276)


## Resources

### rx.js
  [interactive Rx](http://rxmarbles.com/)
  [categories-of-operators](http://reactivex.io/rxjs/manual/overview.html#categories-of-operators)
  [使用 RxJS 构造复杂单页应用的数据逻辑](https://github.com/xufei/blog/issues/38)
  [RxJS 入门指引和初步应用](https://github.com/xufei/blog/issues/44)
  [单页应用的数据流方案探索](https://github.com/xufei/blog/issues/47)
  [复杂单页应用的数据层设计](https://github.com/xufei/blog/issues/42)

### mobx
  [mobx-share (mobx 知识结构)](https://ckinmind.github.io/mobx-share/)
  [mobx-utils](https://github.com/mobxjs/mobx-utils)
  
### jest
  [Running Jest Tests Before Each Git Commit](https://benmccormick.org/2017/02/26/running-jest-tests-before-each-git-commit/)

### styled-component
  [styled-component](https://www.styled-components.com/docs)

### example
  [react-typescript-samples](https://github.com/Lemoncode/react-typescript-samples)
  [typescript-react-mobx-template](https://github.com/dimafeng/typescript-react-mobx-template)


## talk idea
  0. 就像混泥土 -- 盖小房子随便配比 --- 但是改三峡大坝可就不行了

  

