import { FC, memo } from 'react'

import { ICON, ICON_CMD } from '@/config'

import { Br } from '@/components/Common'
import DropdownButton from '@/components/Buttons/DropdownButton'
import SubTitle from '@/components/SubTitle'
import EmailSubscriber from '@/components/EmailSubscriber'

import InterviewsList from './InterviewsList'
import Brand from '../Brand'
// import Linkers from './Linkers'

import {
  Wrapper,
  SubDesc,
  Divider,
  PublishIcon,
  PublishBtnWrapper,
  InterviewsWrapper,
  Footer,
} from '../styles/right_sidebar/index'

const options = [
  {
    key: '0',
    icon: `${ICON_CMD}/common_check.svg`,
    title: '发布作品',
    desc: '像世界分享你的创意 ..',
  },
  {
    key: '1',
    icon: `${ICON_CMD}/common_link.svg`,
    title: '发布限制',
    desc: '原则上不欢迎此类内容',
  },
]

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
        <DropdownButton
          options={options}
          onClick={(key) => {
            console.log('key: ', key)
          }}
        >
          <PublishIcon src={`${ICON}/edit/publish-rocket.svg`} />
          发布作品
        </DropdownButton>
      </PublishBtnWrapper>
      <Br top={16} bottom={20} />
      <InterviewsWrapper>
        <SubTitle withMore>开发者访谈</SubTitle>
        <SubDesc>积极发掘有趣的开发者们，了解优秀产品背后的故事。</SubDesc>
        <InterviewsList />
      </InterviewsWrapper>
      <Br top={20} bottom={20} />
      <EmailSubscriber
        activeByDefault
        title="作品集市动态"
        desc="定期推送优秀产品介绍、榜单等，可随时取消，欢迎订阅。"
      />
      <Divider top={30} bottom={12} />
      <Footer>关于，统计，反馈</Footer>
    </Wrapper>
  )
}

export default memo(RightSidebar)
