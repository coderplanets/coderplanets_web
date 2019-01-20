### 基本结构

在结合了自身实际需求并参考了社区各种优秀开源项目之后，目前的项目目录结构如下所示(为简便已除去各种 Test/CI/Linter/Deps 等文件/目录):

```bash
├── components                                // pure components
│      ├── ArticleActionsPanel
│      ├── ArticleEditFooter
│      ├── ArticleEditToolbar
|       ..... skip ....
│      ├── DotDivider
├── containers                                // smart components
│      ├── AccountEditor
│      ├── AccountViewer
|        .... skip ....
│      ├── CheatsheetThread
│      ├── Comments
│      ├── WikiThread
│      └── schemas                           // common schema/fragment
├── deploy                                   // docker related
│      ├── dev
│      └── production
├── lang                                     // i18n support
│      ├── .messages
│      ├── en.json
│      └── zh.json
├── pages                                    // app route files
│      ├── _app.js
│      ├── _document.js
│      ├── _error.js
|        .... skip ....
│      ├── api.js
│      ├── communities.js
├── server.js                                // custom node server
├── stores                                   // comon/top-level state stores
│      ├── AccountStore
│      ├── RootStore
│      ├── SharedModel
│      ├── ThemeStore
│      ├── ViewingStore
│      ├── index.js
│      └── init.js
├── utils                                    // utils funcitons, themes, common styles ..
│       ├── analytics.js
│       ├── animations.js
│       ├── themes
|          .... skip....
│       └── validator.js
```

### Pure Component

"纯"组件在社区里也被叫做"贫血"组件， “笨”组件等等，自身不含有任何状态，只依赖于外部 props 传入的状态，输入一致则输出一致，类似于函数式编程概念里的纯函数。

以一个最简单的 DotDivider 组件作为列子, 目录结构如下:
```bash
.
├── index.js
├── styles
│   └── index.js
└── tests
    └── index.test.js

```

### index.js

index.js 为该组件的入口文件，负责基本的功能实现(如果结构复杂则依然在本目录下引入其他组件即可)。

```jsx
import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './styles'
import { makeDebugger } from '../../utils'

/* eslint-disable-next-line */
const debug = makeDebugger('c:DotDivider:index')

const DotDivider = ({ radius, space, className }) => (
  <Wrapper radius={radius} space={space} />
)

DotDivider.propTypes = {
  radius: PropTypes.string,
  space: PropTypes.string,
}

DotDivider.defaultProps = {
  radius: '5px',
  space: '5px',
}

export default DotDivider
```

#### styles/index.js

styles/index.js 为该组件的样式文件，和上级目录的组件一一对应，比如： 

index.js --> styles/index.js 
SubComponent -> styles/sub_component.js


```jsx
import styled from 'styled-components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  width: ${({ radius }) => radius};
  height: ${({ radius }) => radius};
  border-radius: 100%;
  background-color: ${theme('thread.articleDigest')};

  margin-left: ${({ space }) => space};
  margin-right: ${({ space }) => space};
  display: block;
`

export const Other = 1
```

#### tests

tests 目录下包含该组件的基本单元测试。


### Containers


容器组件，社区里也叫"充血"组件，“聪明”组件等等，自身包含状态管理，逻辑，多语言，GraphQL schema, 样式等，可以看成是一个小的闭环系统。

一个简单的 Container 组件结构如下

```js
├── Editor.js                // sub component
├── index.js                 // entry for current container
├── lang.js                  // i18n messages
├── logic.js                 // all the logic belongs to this cotainer
├── schema.js                // GraphQL schema
├── store.js                 // state  management 
├── styles                   // styles
│   ├── editor.js
│   ├── index.js
│   └── preview.js
└── tests                    // tests
    ├── index.test.js
    └── store.test.js
```

#### index.js 

index.js 除了和纯组件相同的展示/集成功能外，最大的不同是引入了`状态管理`和`逻辑`, 一个简化版的例子如下所示：

```jsx

import Header from './Header'
import Editor from './Editor'
//  ...

import { Wrapper, ViewerWrapper } from './styles'

import { makeDebugger, storePlug } from '../../utils'
import { init, uninit, changeView, onPublish, canclePublish } from './logic'

class PostEditorContainer extends React.Component {
  constructor(props) {
    super(props)
    const { postEditor, attachment } = props

    init(postEditor, attachment)
  }

  componentWillUnmount() {
    uninit()
  }

  render() {
    const { postEditor } = this.props
    const { copyRight,  thread,   curView,    // ...   } = postEditor

    return (
      <Wrapper>
        <Header
          isEdit={isEdit}
          curView={curView}
          thread={thread}
          referUsers={referUsersData}
        />
 
        <ArticleEditFooter
          isEdit={isEdit}
          statusMsg={statusMsg}
          onCancle={canclePublish}
          onPublish={onPublish}
        />
      </Wrapper>
    )
  }
}

export default inject(storePlug('postEditor'))(observer(PostEditorContainer))
```

根据我自己的一些经验和项目一年来演进的实际情况，我认为局部状态是糟糕的。所以所有的状态都交于外部的状态管理工具 [Mobx-State-Tree](https://github.com/mobxjs/mobx-state-tree), 然后通过下面函数将该容器与整个项目状态树中相对应的子状态树链接起来：

```js
export default inject(storePlug('postEditor'))(observer(PostEditorContainer))
```

#### store.js

store.js 类似于 MVC 架构下的 M 层，基于 [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree)实现，兼顾了强类型和可读性，一个简单的例子如下：

```js
...
import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { Post, Mention } from '../../stores/SharedModel'
import { markStates, makeDebugger, stripMobx, changeset } from '../../utils'

/* eslint-disable-next-line */
const debug = makeDebugger('S:PostEditorf')

const PostEditor = t
  .model('PostEditor', {
    editPost: t.optional(Post, {}),

    mentionList: t.optional(t.array(Mention), []),
    // current "@user" in valid array format
    referUsers: t.optional(t.array(Mention), []),
    publishing: t.optional(t.boolean, false),
    isEdit: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get mentionListData() {
      return stripMobx(self.mentionList)
    },
    ...
  }))
  .actions(self => ({
    validator(type) {
       ...
    },
    updateEditing(sobj) {
      const editPost = R.merge(self.editData, { ...sobj })
      return self.markState({ editPost })
    },
    reset() {
      self.markState({ isEdit: false, mentionList: [] })
      self.editPost = { title: '', body: '' }
      ...
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default PostEditor
```

这里的所有状态都只被在这个 containers 目录里的组件使用，属于整个应用状态树上的一个子树，如果需要访问"主树"或其他"分支"的状态树可以使用 `get root` 方法，详见[MST文档](https://github.com/mobxjs/mobx-state-tree)。状态无法被 view 层直接更新，必须经由 logic 层调用 `store.markState` 或 store 上提供的其他 `action` 方法更新。

#### logic.js

尽管可以，但我认为逻辑并不属于 `view` 层，`view` 层应该是没有"副作用"的。因此我把所有的逻辑, 不论同步的还是异步的，都作为惯例提取到同目录下的 logic.js 中, 一个简化版的 logic.js 文件如下：

```js
import R from 'ramda'

import { asyncRes, asyncErr, $solver } from '../../utils'

import { S, updatablePostFields } from './schema'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()

/* eslint-disable-next-line */
const debug = makeDebugger('L:PostEditor')

let store = null
let sub$ = null


export const onPublish = () => {
  if (!store.validator('general')) return false

  sr71$.mutate(S.createPost, variables)
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('createPost'),
    action: () => {
      doneCleanUp()
      dispatchEvent(EVENT.REFRESH_POSTS)
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: ({ details }) =>  cancleLoading()
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => cancleLoading()
  },
]

export const init = (_store) => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export const uninit = () => {
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}

```

所有的 logic 文件都有[一些样板代码](https://github.com/coderplanets/coderplanets_web/blob/dev/utils/scripts/generators/container/logic.js.hbs)(可以通过 make gen 自动生成)。得益于 Rx.js 强大而优雅的力量以及函数式编程中模式匹配概念的启发，在这个架构下，不论逻辑是异步的还是同步的，都可以统一的用 match-action 结构来处理。整个逻辑处理的流程可以简化为 

`处理数据` -->  `更新状态树`  以及/或者 `响应数据` -->  `更新状态树` 


#### schema.js

所有 GraphQL 请求的 schema 定义都在这里，相同的 fragment 被提取到了上层目录的 'schemas' 下。
logic 层在即可使用 sr71$.query(S.post, {...}) 进行异步请求。

```js
import gql from 'graphql-tag'
import { F, P } from '../schemas'

const post = gql`
  query post($id: ID!, $userHasLogin: Boolean!) {
    post(id: $id) {
      ${F.post}
      body
      author {
        ${F.author}
      }
      tags {
        ${F.tag}
      }
      commentsParticipators {
        ${F.author}
      }
      commentsCount
      viewerHasViewed @include(if: $userHasLogin)
      viewerHasFavorited @include(if: $userHasLogin)
      viewerHasStarred @include(if: $userHasLogin)
      favoritedCategoryId @include(if: $userHasLogin)
    }
  }
`
const setTag = gql`
  ${P.setTag}
`
.....
const schema = {
  post,
  setTag,
  .....
}

export default schema
```

