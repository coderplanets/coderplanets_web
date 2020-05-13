Like many other projects, this project has some conventions that are customary:

### File/Module Naming

There must be a unique index.js as the entry file in the container component directory/pure component directory/style directory.
Component file files are named with a capital hump, such as PostEditor.js, and the corresponding style files are named in lowercase, such as styles/post_editor.js

#### sr71

Sr71.js is the asynchronous module of the project (utils/aysnc/sr71.js), which is mainly responsible for network request/event response and so on.
The name of the sr71 comes from the US military's sr71 blackbird reconnaissance plane. See the [ansyc documentation](https://github.com/coderplanets/coderplanets_web/blob/docs/docs/js/async.md) for details.

#### Doramon

Doramon provides a site similar to [alfred](https://www.alfredapp.com/), the name of Doramon
The word comes from the English translation of Doraemon (Machine Cat), and hopes that its pocket can surprise us at any time.

### Functional division

Summarize
Shao
](https://github.com/coderplanets/coderplanets_web/blob/docs/docs/architecture/intro.zh-CN.md)
Mentioned:

- Pure components (display components) are placed in the components directory
- The container component is placed under the containers directory
- The container or component should not contain an internal state. The container component state is uniformly distributed to the store.js in the same directory, pure component
    State unified external incoming
- Synchronous or asynchronous logic should be extracted into the same directory's logic.js, React only does the view layer
- All styles should be in the styles/ folder under the same directory, and the style file is named after stake_style

### module import

based on [babel-resolver][https://github.com/tleunen/babel-plugin-module-resolver] 's config:

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

we can easily import files like:

```js
import { ISSUE_WEB } from '@/config'
import { connectStore, buildLog } from '@/utils'

import ArticleEditFooter from '@/components/ArticleEditFooter'
...
```

### Module reference order

Container components please follow the following reference order (1-8):

```js
// 1. import global deps
Import React from 'react'
Import { inject, observer } from 'mobx-react'
Import Waypoint from 'react-waypoint'
Import R from 'ramda'

// 2. import utils
Import { connectStore, buildLog, ROUTE, THREAD } from '@/utils'

// 3. import global containers
Import TagsBar from '@/containers/TagsBar'
// 4. import global components
Import Maybe from '@/components/Maybe'
Import PagedContents from '@/components/PagedContents'
Import ContentFilter from '@/components/ContentFilter'

// 5. import local components
Import CityList from './CityList'

// 6. import styles
Import { Wrapper,LeftPadding, RightPadding } from './styles'

// 7. import logics
Import * as logic from './logic'

// 8. init log
/* eslint-disable-next-line */
const log = buildLog('C:PostsThread')
```

Please follow the following reference order (1-7) for logical files:

```js
// 1. import global deps
Import R from 'ramda'

// 2. import utils
Import {
  asyncRes,
  asyncErr,
  buildLog,
  send,
  EVENT,
  ERR,
  TYPE,
  ROUTE,
  THREAD,
} from '@/utils'

// 3. import aysnc mudule
Import SR71 from '@/utils/async/sr71'
// 4. import graphql schema
Import S from './schema'

// 5. init aysnc
Const sr71$ = new SR71({
  recieve: [
    EVENT.REFRESH_POSTS,
  ],
})

// 6. init store
Let store = null
Let sub$ = null

// 7. init log
/* eslint-disable-next-line */
const log = buildLog('L:PostsThread')
```

### Component Communication

Please refer to the component communication documentation.
