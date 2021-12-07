import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import { ICON_CMD, EMAIL_SUPPORT } from '@/config'
import { TYPE } from '@/constant'

import NoticeBar from '@/widgets/NoticeBar'

import {
  Wrapper,
  Title,
  DescLabel,
  DescIcon,
  DescText,
  DescLink,
} from './styles/header_info'

type TProps = {
  type: string
  totalCount: number
  curCommunity: TCommunity
}

const HeaderInfo: FC<TProps> = ({ type, totalCount, curCommunity }) => {
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
            <DescText> --</DescText>
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
            <DescText> --</DescText>
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
            <DescText>关注 -- 的人 </DescText>
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
            <DescText>-- 关注的人 </DescText>
          </DescLabel>
        </Wrapper>
      )

    case TYPE.USER_LISTER_COMMUNITY_SUBSCRIBERS:
      return (
        <Wrapper>
          <Title>
            已加入 ({totalCount}
            人)
          </Title>
          <DescLabel>
            <DescText>他们加入了 {curCommunity.title} 社区 </DescText>
          </DescLabel>
        </Wrapper>
      )

    case TYPE.USER_LISTER_COMMUNITY_EDITORS:
      return (
        <Wrapper>
          <Title>
            {curCommunity.title} 社区志愿者 ({totalCount}
            人)
          </Title>
          <NoticeBar
            type="info"
            content="志愿者为具有对应社区日常管理权限的用户，如果有你认为合适的人选，欢迎推荐或自荐 🙏🏻 。"
            bottom={15}
            left={-6}
            noBg
          />
          <DescLabel>
            <DescLink
              href={`mailto:${EMAIL_SUPPORT}?subject=申请成为 ${curCommunity.raw} 社区志愿者&body=感谢您的关注，成为子社区志愿者后，您将获得对应社区的各种维护管理等服务大家的权限，协助社区的健康发展. %0A本着对社区成员负责任的态度，我们需要简单了解一下你的背景 (最终正文请删除本行): %0A%0A%0A你是谁? (请提供必要的社交账号，包括但不限于 twitter / zhihu / weibo 等) %0A%0A%0A你做过什么? (包括但不限于 github / stackoverflow / 个人网站(博客) 等技术社区账号) %0A%0A%0A你对 CoderPlanets 的志愿者自治有什么建议吗?`}
            >
              申请成为社区志愿者
            </DescLink>
          </DescLabel>
        </Wrapper>
      )

    default:
      return <Title>WTF ?</Title>
  }
}

export default memo(HeaderInfo)
