import React from 'react'

import { ICON_CMD } from '../../config'
import {
  Wrapper,
  Title,
  DescLabel,
  DescIcon,
  EditorIcon,
  DescText,
} from './styles/header_info'

import { TYPE } from '../../utils'

const HeaderInfo = ({ type, totalCount, brief }) => {
  switch (type) {
    case TYPE.USER_LISTER_FAVORITES: {
      return (
        <Wrapper>
          <Title>
            已收藏用户 ({totalCount}
            人)
          </Title>
          <DescLabel>
            <DescIcon src={`${ICON_CMD}/paper.svg`} />
            <DescText> {brief}</DescText>
          </DescLabel>
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
          <DescLabel>
            <DescIcon src={`${ICON_CMD}/paper.svg`} />
            <DescText> {brief}</DescText>
          </DescLabel>
        </Wrapper>
      )
    }
    case TYPE.USER_LISTER_FOLLOWERS: {
      return (
        <Wrapper>
          <Title>
            关注者 ({totalCount}
            人)
          </Title>
          <DescLabel>
            <DescText>关注 {brief} 的人 </DescText>
          </DescLabel>
        </Wrapper>
      )
    }
    case TYPE.USER_LISTER_FOLLOWINGS: {
      return (
        <Wrapper>
          <Title>
            关注中 ({totalCount}
            人)
          </Title>
          <DescLabel>
            <DescText>{brief} 关注的人 </DescText>
          </DescLabel>
        </Wrapper>
      )
    }
    case TYPE.USER_LISTER_COMMUNITY_EDITORS: {
      return (
        <Wrapper>
          <Title>
            {brief} 社区编辑 ({totalCount}
            人)
          </Title>
          <DescLabel>
            <EditorIcon src={`${ICON_CMD}/co_editor.svg`} />
            <DescText>{brief} 社区编辑面向所有用户开放，详情查看. </DescText>
          </DescLabel>
        </Wrapper>
      )
    }
    default: {
      return <Title>WTF ?</Title>
    }
  }
}

export default HeaderInfo
