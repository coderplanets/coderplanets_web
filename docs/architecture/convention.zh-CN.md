和其他很多项目一样， 本项目也有一些约定俗成的惯例：

### 文件/模块命名

容器组件目录/纯组件目录/样式目录下都必须有唯一的 index.js 作为入口文件。
组件文件文件使用大写驼峰命名, 比如 PostEditor.js, 而相对应的样式文件则使用小写命名, 比如 styles/post_editor.js

#### sr71

sr71.js 为项目的异步模块(utils/aysnc/sr71.js), 主要负责网络请求/事件响应等等。
sr71 的名字来源于美军的 sr71 黑鸟侦察机, 详见 [ansyc 文档](https://github.com/coderplanets/coderplanets_web/blob/docs/docs/js/async.zh-CN.md)。

#### Doramon

Doramon 为网站提供类似于 [alfred](https://www.alfredapp.com/) 的功能, Doramon 的名
字来自哆啦 A 梦(机器猫)的英译, 希望它的口袋能随时给我们带来惊喜。

### 功能划分

总结一下[架构介
绍
](https://github.com/coderplanets/coderplanets_web/blob/docs/docs/architecture/intro.zh-CN.md)
所提到的:

- 纯组件(展示组件)放在 components 目录下
- 容器组件放在 containers 目录下
- 容器或组件不应含有内部状态。容器组件状态统一交于同目录下的 store.js, 纯组件状
  态统一外部传入
- 同步或异步逻辑都应该抽取到同目录的 logic.js 中, React 只做 view 层
- 所有样式应在同目录下的 styles/ 文件夹，且样式文件的命名遵循 stake_style

### 模块引用

得益于 [babel-resolver][https://github.com/tleunen/babel-plugin-module-resolver] 的配置:

```js
"alias": {
  "containers":"./containers",
  "components":"./components",
  "config":"./config",
  "stores":"./stores",
  "schemas":"./containers/schemas",
  "utils":"./utils",
  "Img": "./components/Img",
  "SvgIcons": "./components/SvgIcons"
}
```

在项目中可以直接引用上述组件，比如：

```js
import { ISSUE_WEB } from '@config'
import { connectStore, buildLog } from '@utils'

import ArticleEditFooter from '@components/ArticleEditFooter'
...
```

### 模块引用顺序

容器组件请遵守如下引用顺序(1-8):

```js
// 1. import global deps
import React from 'react'
import { inject, observer } from 'mobx-react'
import Waypoint from 'react-waypoint'
import R from 'ramda'

// 2. import utils
import { connectStore, buildLog, ROUTE, THREAD } from '@utils'

// 3. import global containers
import TagsBar from '@containers/TagsBar'
// 4. import global components
import Maybe from '@components/Maybe'
import PagedContents from '@components/PagedContents'
import ContentFilter from '@components/ContentFilter'

// 5. import local components
import CityList from './CityList'

// 6. import styles
import { Wrapper, LeftPadding, RightPadding } from './styles'

// 7. import logics
import * as logic from './logic'

// 8. init log
/* eslint-disable-next-line */
const log = buildLog('C:PostsThread')
```

逻辑文件请遵守如下引用顺序(1-7):

```js
// 1. import global deps
import R from 'ramda'

// 2. import utils
import {
  asyncRes,
  asyncErr,
  buildLog,
  send,
  EVENT,
  ERR,
  TYPE,
  ROUTE,
  THREAD,
} from '@utils'

// 3. import aysnc mudule
import SR71 from '@utils/async/sr71'
// 4. import graphql schema
import S from './schema'

// 5. init aysnc
const sr71$ = new SR71({
  recieve: [EVENT.REFRESH_POSTS],
})

// 6. init store
let store = null
let sub$ = null

// 7. init log
/* eslint-disable-next-line */
const log = buildLog('L:PostsThread')
```

### 组件通信

请参考组件通讯文档
