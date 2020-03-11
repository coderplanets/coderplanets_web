本项目的状态管理基于 [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree)。总体原则是**鼓励全局状态，禁止(只在特殊情况下)使用 React 的内部状态**。全局状态统一在 [stores/RootStore/index.js](https://github.com/coderplanets/coderplanets_web/blob/dev/stores/RootStore/index.js) 下

你也可以使用可视化的方法查看当前应用内的所有状态：

![image](https://user-images.githubusercontent.com/6184465/51725852-63eee400-209f-11e9-96c2-db13a7c8aeaa.png)

root 状态树由分散在各个容器组件内的子状态树(store.js) 以及 /stores/ 目录的下的`领域状态树`组合而来。

#### 子状态树

子状态树只存在于容器组件, 统一命名为 store.js, 通过 [connectStore](https://github.com/coderplanets/coderplanets_web/blob/dev/utils/mobx_helper.js#L37) 连接到根状态树, 以 PostEditor 容器为例:

```js
export default connectStore(PostEditorContainer)
```

相同目录下的 containers/PostEditor/store.js 只包含 PostEditor 容器所需的状态，且状态只能通过该 store 暴露出的 action 方法，由同目录下 logic.js 中的方法调用改变， 视图层无法直接改变状态。

#### 领域状态树

不属于某个具体的容器的子状态树，比如 AccountStore, ThemeStore, ViewingStore 等等，统一在 `stores/` 目录下
