import { FC, memo } from 'react'

import CustomScroller from '@/widgets/CustomScroller'
import FeedsBar from '@/widgets/FeedsBar'
import NoticeBar from '@/widgets/NoticeBar'

import { Wrapper, ShadowBarHolder } from './styles/news_board'

const NewsBoard: FC = () => {
  return (
    <Wrapper>
      <CustomScroller
        direction="horizontal"
        height="90vh"
        innerHeight="90vh"
        shadowSize="large"
        barSize="medium"
        withBorder
      >
        <FeedsBar title="国外科技动态" />
        <FeedsBar title="国内科技动态" />
        <FeedsBar title="Github Trending" />
        <FeedsBar title="象牙塔" />
        <FeedsBar title="播客" />
        <FeedsBar title="奇奇怪怪" />
        <ShadowBarHolder />
      </CustomScroller>

      <NoticeBar
        type="info"
        content="UI 部分 inspired by TwitterDeck，当前内容仅为展示。自动化采集分类系统仍在开发调试中，欢迎任何形式的参与。"
        top={15}
        right={10}
        noBg
      />
    </Wrapper>
  )
}

export default memo(NewsBoard)
