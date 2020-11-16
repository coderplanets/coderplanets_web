import React from 'react'

import { ICON, ICON_CMD } from '@/config'

import { Br } from '@/components/Common'
import { DropdownButton } from '@/components/Buttons'
import SubTitle from '@/components/SubTitle'
import EmailSubscriber from '@/components/EmailSubscriber'

import InterviewsList from './InterviewsList'
import Linkers from './Linkers'

import {
  Wrapper,
  SubDesc,
  Divider,
  PublishIcon,
  PublishBtnWrapper,
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

const RightSidebar = () => {
  return (
    <Wrapper>
      <Linkers />
      <Divider top="18px" bottom="30px" />
      <PublishBtnWrapper>
        <DropdownButton
          type="primary"
          options={options}
          onClick={(key) => {
            console.log('key: ', key)
          }}
        >
          <PublishIcon src={`${ICON}/edit/publish-rocket.svg`} />
          发布作品
        </DropdownButton>
      </PublishBtnWrapper>
      <Br top="16px" bottom="20px" />
      <SubTitle withMore>开发者访谈</SubTitle>
      <SubDesc>积极发掘有趣的开发者们，了解优秀产品背后的故事。</SubDesc>
      <InterviewsList />
      <Br top="20px" bottom="20px" />
      <EmailSubscriber
        activeByDefault
        title="作品集市动态"
        desc="定期推送优秀产品介绍、榜单等，可随时取消，欢迎订阅。"
      />
      <Divider />
      <Footer>关于，举报，建议</Footer>
    </Wrapper>
  )
}

export default RightSidebar
