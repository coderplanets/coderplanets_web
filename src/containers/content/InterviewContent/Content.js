import React from 'react'

import { Wrapper } from './styles/content'

const Content = () => {
  return (
    <Wrapper>
      <div>
        <div>1. 类似社区帖子的展现形式，但是和社区的数据结构独立</div>
        <div>2. 有多个层次的 tag (包含右侧的和 navi 本是的)</div>
        <div>3. 有一层 tag 留给知名公司</div>
        <div>4. 有五星难度的打分 ?</div>
        <div>5. 帖子展示要考虑答案是否被采纳以及相关信息</div>
        <div>6. 帖子有点像问答，没有 body, 只有 title</div>
      </div>
    </Wrapper>
  )
}

export default React.memo(Content)
