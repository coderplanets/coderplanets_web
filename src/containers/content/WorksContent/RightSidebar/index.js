import React from 'react'

import { ICON_CMD } from '@/config'
import { DropdownButton } from '@/components/Buttons'
import EmailSubscriber from '@/components/EmailSubscriber'

import MakersInfo from './MakersInfo'
import {
  Wrapper,
  Title,
  Divider,
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
      <MakersInfo />
      <br />
      <br />
      {/* <Divider /> */}
      {/* <Title></Title> */}
      <PublishBtnWrapper>
        <DropdownButton
          type="primary"
          options={options}
          onClick={(key) => {
            console.log('key: ', key)
          }}
        >
          发布作品
        </DropdownButton>
      </PublishBtnWrapper>
      <Divider />
      {/* <Divider />
      <Title>活跃用户</Title> */}
      {/* <div>...</div> */}
      {/* <Divider /> */}
      <Title>开发者访谈</Title>
      <div>...</div>
      <Divider />
      <EmailSubscriber />
      <Divider />
      <div>关于，订阅，xx</div>
    </Wrapper>
  )
}

export default RightSidebar
