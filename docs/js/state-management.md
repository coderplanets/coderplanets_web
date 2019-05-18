The state management for this project is based on [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree). The general principle is that **encourages global state and prohibits (only in special cases) the use of React's internal state**. The global state is unified under [stores/RootStore/index.js](https://github.com/coderplanets/coderplanets_web/blob/dev/stores/RootStore/index.js)

You can also use the visual method to see all the states in the current app:

![image](https://user-images.githubusercontent.com/6184465/51725852-63eee400-209f-11e9-96c2-db13a7c8aeaa.png)

The root state tree is a combination of the child-state-tree (store.js) scattered within each container component and the `domain state tree' under the /stores/ directory.

#### child state tree

The substate tree exists only in the container component, named store.js, and is connected to the root state tree via [connectStore](https://github.com/coderplanets/coderplanets_web/blob/dev/utils/mobx_helper.js#L37) Take the PostEditor container as an example:

```js
export default connectStore(PostEditorContainer)
```

Containers/PostEditor/store.js in the same directory only contains the state required by the PostEditor container, and the state can only be changed by the method method exposed in the store, which is changed by the method call in logic.js in the same directory. The view layer cannot be directly Change the status.

#### domain state Tree

domain-state trees that do not belong to a specific container, such as AccountStore, ThemeStore, ViewingStore, etc., unified in the `stores/` directory
