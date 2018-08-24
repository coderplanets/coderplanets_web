import React from 'react'

import { Wrapper, Title, Desc, Number } from './styles/achieve_info'

const AchieveInfo = () => {
  return (
    <Wrapper>
      <Title>个人成就</Title>
      <Desc>
        共获得 <Number>18</Number> 赞
      </Desc>
      <Desc>
        创作的内容被收藏 <Number>222</Number> 次
      </Desc>

      <Desc>xx,xx,xx 社区编辑</Desc>
    </Wrapper>
  )
}

export default AchieveInfo
