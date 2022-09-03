import { FC, memo } from 'react'

import { THREAD } from '@/constant'
import { Br } from '@/widgets/Common'
import PublishButton from '@/widgets/Buttons/PublishButton'
import SubTitle from '@/widgets/SubTitle'
import EmailSubscriber from '@/widgets/EmailSubscriber'

import InterviewsList from './InterviewsList'
import Brand from '../Brand'
// import Linkers from './Linkers'

import {
  Wrapper,
  SubDesc,
  PublishBtnWrapper,
  InterviewsWrapper,
  SubscribeWrapper,
} from '../styles/right_sidebar/index'

type TProps = {
  testid?: string
  showSidebar: boolean
}

const RightSidebar: FC<TProps> = ({
  testid = 'works-content-right-sidebar',
  showSidebar = false,
}) => {
  return (
    <Wrapper testid={testid} showSidebar={showSidebar}>
      <Brand />
      {/* <Linkers /> */}
      {/* <Divider top={18} bottom={22} /> */}
      <PublishBtnWrapper>
        <PublishButton
          thread={THREAD.WORKS}
          text={showSidebar ? '发 布' : '发布新作品'}
        />
      </PublishBtnWrapper>
      <Br top={16} bottom={20} />
      <InterviewsWrapper>
        <SubTitle withMore>开发者访谈</SubTitle>
        <SubDesc>积极发掘有趣的开发者们，了解优秀产品背后的故事。</SubDesc>
        <InterviewsList />
      </InterviewsWrapper>
      <Br top={20} bottom={20} />
      <SubscribeWrapper showSidebar={showSidebar}>
        <EmailSubscriber
          activeByDefault
          title="作品集市动态"
          desc="定期推送优秀产品介绍、榜单等，可随时取消，欢迎订阅。"
        />
      </SubscribeWrapper>
      {/* <Divider top={30} bottom={12} />
      <Footer>关于，统计，反馈</Footer> */}
    </Wrapper>
  )
}

export default memo(RightSidebar)
