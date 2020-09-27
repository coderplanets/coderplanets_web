import React from 'react'

import CustomScroller from '@/components/CustomScroller'

import {
  Wrapper,
  Header,
  AuthorWrapper,
  Avatar,
  Digest,
  UserName,
  Desc,
} from '../styles/right_sidebar/markers_info'

const src = 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/works/market1.jpeg'

const Maker = () => {
  return (
    <AuthorWrapper>
      <Avatar src={src} />
      <Digest>
        <UserName>Mydearxym</UserName>
        <Desc>very cool person</Desc>
      </Digest>
    </AuthorWrapper>
  )
}

const MakersInfo = () => {
  return (
    <Wrapper>
      <Header> 4 位创作者</Header>
      <CustomScroller
        direction="vertical"
        height="120px"
        showShadow={false}
        barSize="tiny"
      >
        <Maker />
        <Maker />
        <Maker />
        <Maker />
        <Maker />
        <Maker />
      </CustomScroller>
    </Wrapper>
  )
}

export default MakersInfo
