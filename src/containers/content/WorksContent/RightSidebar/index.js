import React from 'react'

import { ICON, ICON_CMD } from '@/config'

import { Br } from '@/components/Common'
import { DropdownButton } from '@/components/Buttons'
import EmailSubscriber from '@/components/EmailSubscriber'

import InterviewsList from './InterviewsList'
import Linkers from './Linkers'

import {
  Wrapper,
  Title,
  Divider,
  PublishIcon,
  PublishBtnWrapper,
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
          <PublishIcon src={`${ICON}/publish_rocket.svg`} />
          发布作品
        </DropdownButton>
      </PublishBtnWrapper>
      <Br top="25px" bottom="20px" />
      <Title>开发者访谈</Title>
      <InterviewsList />
      <Br top="25px" bottom="20px" />
      <EmailSubscriber
        activeByDefault
        title="作品集市动态"
        desc="定期推送优秀产品介绍、榜单等，可随时取消，欢迎订阅。"
      />
      <Divider />
      <div>关于，举报，建议</div>
    </Wrapper>
  )
}

export default RightSidebar
