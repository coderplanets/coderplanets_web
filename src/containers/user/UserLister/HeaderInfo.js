import React from 'react'

import { ICON_CMD, EMAIL_SUPPORT } from '@config'
import { TYPE } from '@constant'

import {
  Wrapper,
  Title,
  DescLabel,
  DescIcon,
  EditorIcon,
  DescText,
  DescLink,
} from './styles/header_info'

const HeaderInfo = ({ type, totalCount, brief, curCommunity }) => {
  switch (type) {
    case TYPE.USER_LISTER_FAVORITES:
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

    case TYPE.USER_LISTER_STARS:
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

    case TYPE.USER_LISTER_FOLLOWERS:
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

    case TYPE.USER_LISTER_FOLLOWINGS:
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

    case TYPE.USER_LISTER_COMMUNITY_SUBSCRIBERS:
      return (
        <Wrapper>
          <Title>
            关注中 ({totalCount}
            人)
          </Title>
          <DescLabel>
            <DescText>关注 {brief} 社区的人 </DescText>
          </DescLabel>
        </Wrapper>
      )

    case TYPE.USER_LISTER_COMMUNITY_EDITORS:
      return (
        <Wrapper>
          <Title>
            {brief} 社区编辑 ({totalCount}
            人)
          </Title>
          <DescLabel>
            <EditorIcon src={`${ICON_CMD}/co_editor.svg`} />
            <DescText>
              {brief} 社区编辑面向所有用户开放，
              <DescLink
                href={`mailto:${EMAIL_SUPPORT}?subject=申请成为 ${curCommunity.raw} 社区编辑&body=感谢您的关注,成为社区编辑后,您将获得本社区范围内各种内容的删帖管理等权限,协助社区的健康发展. 因此本着对社区成员负责任的态度，我需要知道关于你的以下信息 (最终正文请删除本行): %0A%0A%0A你是谁? (包括但不限于 weibo / zhihu / jianshu / twitter 等社交账号) %0A%0A%0A你做过什么? (包括但不限于 github / stackoverflow / 个人网站(博客) 等技术社区账号) %0A%0A%0A你在 coderplanets 上的账号是?`}
              >
                申请成为社区编辑
              </DescLink>
              。
            </DescText>
          </DescLabel>
        </Wrapper>
      )

    default:
      return <Title>WTF ?</Title>
  }
}

export default HeaderInfo
