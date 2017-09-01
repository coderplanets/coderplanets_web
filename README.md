
## TODO

- [x] add GreenKeeper
- [x] add TypeScript
- [x] add prettier config
- [x] styled-component example / polish 
- [x] prettier/lint before commit
- [x] gzip: use a CDN to serve statics 
- [x] plop template 
- [x] change dir stucture for more easy test/code
- [ ] add Jest && Jest as 'cover tool'
- [ ] intl: rename messages file to lang
- [ ] CI system
- [ ] mobx-state-tree by move the shop example
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

## Roadmap

- [ ] shop example
- [ ] Menu


## issue

1. next export 不支持从特定目录导出，所以不能将 ts 的代码集中到一个目录


## Resources

0. [mobx-share (mobx 知识结构)](https://ckinmind.github.io/mobx-share/)
1. [react-typescript-samples](https://github.com/Lemoncode/react-typescript-samples)
2. [Running Jest Tests Before Each Git Commit](https://benmccormick.org/2017/02/26/running-jest-tests-before-each-git-commit/)
3. [styled-component](https://www.styled-components.com/docs)

