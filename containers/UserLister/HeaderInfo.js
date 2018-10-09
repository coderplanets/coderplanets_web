import React from 'react'

import { Wrapper, Title } from './styles/header_info'

import { TYPE } from '../../utils'

const HeaderInfo = ({ type, totalCount }) => {
  switch (type) {
    case TYPE.USER_LISTER_FAVORITES: {
      return (
        <Wrapper>
          <Title>
            已收藏用户 ({totalCount}
            人)
          </Title>
          {/*
               <Desc>
               xxx 社区共有编辑/志愿者 14 人，同时对所有感兴趣的朋友开放, ... 详情
               </Desc>
             */}
        </Wrapper>
      )
    }
    case TYPE.USER_LISTER_STARS: {
      return (
        <Wrapper>
          <Title>
            已赞用户 ({totalCount}
            人)
          </Title>
        </Wrapper>
      )
    }
    default: {
      return <Title>WTF ?</Title>
    }
  }
}

export default HeaderInfo
