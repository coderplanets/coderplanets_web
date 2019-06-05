### Basic Structure

after combining the actual needs of the community and referring to various excellent open source projects in the community, the current project directory structure is as follows (for the sake of simplicity, various Test / CI / Linter / Deps files/directories have been removed):

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

"Pure" components are also called "anemia" components in the community, "dump"
components, etc., they are not contain any state, only rely on the state of the
external props, the output is consistent when the input is consistent, similar
to the pure function in functional programming concept .

take DotDivider component as example, the directory structure is as follows:

```bash
.
├── index.js
├── styles
│   └── index.js
└── tests
    └── index.test.js
```

### index.js

Index.js is the entry file for this component and is responsible for the basic implementation of the functionality (if the structure is complex, other components can still be imported under this directory).

```jsx
import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './styles'
import { makelogger } from '@utils'

/* eslint-disable-next-line */
const log = makelogger('c:DotDivider:index')

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

Styles/index.js is the style file of the component, which corresponds to the components of the parent directory, such as:

index.js --> styles/index.js
SubComponent -> styles/sub_component.js

```jsx
import styled from 'styled-components'
import { theme } from '@utils'

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

the basic unit test for the component.

### Containers

Container components, also called "congestion" components, "smart" components, etc, including state management, logic, multi-language, GraphQL schema, style, etc., can be seen as a small eco system.

A simple Container component is structured as follows:

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

Index.js In addition to the same presentation/integration capabilities as pure components, the biggest difference is the introduction of `state management` and `logic`. An example of a simplified version is as follows:

```jsx
import Header from './Header'
import Editor from './Editor'
//  ...

import { Wrapper, ViewerWrapper } from './styles'

import { connectStore, makelogger } from '@utils'
import { useInit, changeView, onPublish, canclePublish } from './logic'

const PostEditorContainer = ({ postEditor, attachment }) =>{
  useInit(postEditor)

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

export default connectStore(PostEditorContainer)
```

Based on my own experience and the actual situation of the project's evolution over the past year, I think the local state is bad. So all the states are handed to the external state management tool [Mobx-State-Tree](https://github.com/mobxjs/mobx-state-tree), and then the container is linked to the entire project state tree by the following function. Corresponding substate trees are linked together

```js
export default connectStore(PostEditorContainer)
```

#### store.js

Store.js is similar to the M layer under the MVC architecture, based on [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree), taking into account strong typing and readability, a simple Examples are as follows

```js
...
import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { Post, Mention } from '@model'
import { markStates, makelogger, stripMobx, changeset } from '@utils'

/* eslint-disable-next-line */
const log = makelogger('S:PostEditorf')

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

All the states here are only used by components in this container directory, belonging to a subtree on the entire application state tree. If you need to access the "main tree" or other "branch" state tree, you can use the `get root` method. See [MST Document](https://github.com/mobxjs/mobx-state-tree) for details. The state cannot be directly updated by the view layer and must be updated via the logic layer by calling `store.markState` or other `action` methods provided on the store.

#### logic.js

Although it is OK, I think the logic does not belong to the `view` layer, and the `view` layer should have no "side effects". So I put all the logic, whether synchronous or asynchronous, as a convention into the logic.js in the same directory. A simplified version of the logic.js file is as follows

```js
import R from 'ramda'

import { asyncRes, asyncErr, $solver } from '@utils'

import { S, updatablePostFields } from './schema'
import SR71 from '@utils/async/sr71'

const sr71$ = new SR71()

/* eslint-disable-next-line */
const log = makelogger('L:PostEditor')

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
    action: ({ details }) => cancleLoading(),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => cancleLoading(),
  },
]

export const init = _store => {
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

All logic files have [some boilerplate code](https://github.com/coderplanets/coderplanets_web/blob/dev/utils/scripts/generators/container/logic.js.hbs) (can be generated automatically by make gen) . Thanks to the powerful and elegant power of Rx.js and the concept of pattern matching in functional programming, under this architecture, whether the logic is asynchronous or synchronous, it can be handled uniformly by the match-action structure. The entire logic processing flow can be simplified to

`Process data` --> `Update status tree` and / or `Response data` --> `Update status tree`

#### schema.js

The schema definition for all GraphQL requests is here, and the same fragment is extracted to the 'schemas' of the upper directory.
The sys layer can make asynchronous requests using sr71$.query(S.post, {...})

```js
import gql from 'graphql-tag'
import { F, P } from '@schemas'

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
