import React from 'react'
import { Remarkable } from 'remarkable'
import remarkableemoj from 'remarkable-emoji'
import mentions from 'remarkable-mentions'
import Prism from 'mastani-codehighlight'

import { MENTION_USER_ADDR } from '@/config'

import MarkDownStyle from '@/containers/layout/ThemePalette/MarkDownStyle'

import { Wrapper } from './styles/markdown_helper'

const md = new Remarkable()
md.use(mentions({ url: MENTION_USER_ADDR }))
md.use(remarkableemoj)

const notTooLong = (l) => l.length < 20

const MarkDownInfo = () => {
  const IntroMD = `\`说明\`: 显示效果与下方实现代码一一对应
# 这是一级标题
\`\`\`text
# 这是一级标题
\`\`\`
## 这是二级标题
\`\`\`text
## 这是二级标题
\`\`\`

### 这是三级标题
\`\`\`text
### 这是三级标题
\`\`\`

#### 这是四级标题
\`\`\`text
#### 这是四级标题
\`\`\`

##### 这是五级标题
\`\`\`text
##### 这是五级标题
\`\`\`

###### 这是六级标题
\`\`\`text
###### 这是六级标题
\`\`\`

编程语言代码高亮:
 \`\`\`js
console.log('hello mastani')
 \`\`\`

\`\`\`text
'''js
console.log('hello mastani')
'''
注意这里是反斜杠(\`), 如果是其他编程语言将'js'替换即可。
\`\`\`

> 这是引用
\`\`\`text
> 这是引用
\`\`\`

At 某个用户: @mydearxym

\`\`\`text
At 某个用户: @mydearxym
\`\`\`

插入链接: [coderplanets.com](https://coderplanets.com)

\`\`\`text
插入链接: [coderplanets.com](https://coderplanets.com)
\`\`\`

## Emoji 参考
`
  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{
        __html: md.render(IntroMD),
      }}
    />
  )
}

/* eslint-enable react/no-danger */
class MarkDownHelper extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    return (
      <Wrapper>
        <MarkDownStyle>
          <MarkDownInfo />
        </MarkDownStyle>
      </Wrapper>
    )
  }
}

export default React.memo(MarkDownHelper)
