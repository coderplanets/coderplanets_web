import { FC, memo } from 'react'
import { Wrapper, Title, Desc } from './styles/detail_info'

const DetailInfo: FC = () => {
  return (
    <Wrapper>
      <Title>名称</Title>
      <Desc>新收藏夹</Desc>

      <Title>内容数</Title>
      <Desc>12 项</Desc>

      <Title>最后更新时间</Title>
      <Desc>3 天前</Desc>

      <Title>是否公开</Title>
      <Desc>公开</Desc>
    </Wrapper>
  )
}

export default memo(DetailInfo)
