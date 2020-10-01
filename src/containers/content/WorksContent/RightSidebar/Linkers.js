import React from 'react'

import { ICON } from '@/config'

import {
  Wrapper,
  Header,
  LinkCardWrapper,
  Avatar,
  Digest,
  Title,
  Desc,
  ArrowIcon,
} from '../styles/right_sidebar/linkers'

const icon =
  'https://avatars0.githubusercontent.com/u/6184465?s=60&u=b65fd4fc422f7a3aed97f6373ee0a9550e3261ed&v=4'

const Addr = ({ title, desc, icon }) => {
  return (
    <LinkCardWrapper>
      <Avatar src={icon} />
      <Digest>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Digest>
      <ArrowIcon src={`${ICON}/arrow-simple.svg`} />
    </LinkCardWrapper>
  )
}

const MakersInfo = () => {
  return (
    <Wrapper>
      <Header>传送门</Header>
      <Addr title="产品猎人" desc="desc" icon={icon} />
      <Addr title="魔鬼细节" desc="desc" icon={icon} />
    </Wrapper>
  )
}

export default MakersInfo
