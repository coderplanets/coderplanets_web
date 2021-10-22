import { FC, memo } from 'react'

import type { TMeetup } from '@/spec'
import { ICON_CMD } from '@/config'

import Upvote from '@/widgets/Upvote'
import DotDivider from '@/widgets/DotDivider'

import Date from './Date'

import {
  Wrapper,
  ContentsWrapper,
  Title,
  Desc,
  ExtraWrapper,
  FooterWrapper,
  Icon,
} from '../styles/card'

type TProps = {
  item: TMeetup
}

const Card: FC<TProps> = ({ item }) => {
  const { upvotesCount, meta } = item

  return (
    <Wrapper>
      <Date />
      <ContentsWrapper>
        <Title>{item.title}</Title>
        {item.id === '11' ? (
          <Desc>
            GNU计划有多反资本家呢？他们甚至，此协议
            规定不得阻止用户再分发。GNU计划有多反资本家呢？他们甚至，此协议
            规定不得阻止用户再分发。GNU计划有多反资本家呢？他们甚至，此协议
            规定不得阻止用户再分发。
          </Desc>
        ) : (
          <Desc>
            GNU计划有多反资本家呢？他们甚至，此协议 规定不得阻止用户再分发。
          </Desc>
        )}

        <ExtraWrapper>
          <Icon src={`${ICON_CMD}/navi/location.svg`} />
          成都
          <DotDivider radius={3} space={8} />
          <Icon src={`${ICON_CMD}/navi/chair.svg`} /> 200
          <DotDivider radius={3} space={8} />
          <Icon src={`${ICON_CMD}/navi/money-yuan.svg`} /> 免费
        </ExtraWrapper>
        <FooterWrapper>
          <Upvote
            count={upvotesCount}
            avatarList={meta.latestUpvotedUsers}
            alias="感兴趣"
          />
        </FooterWrapper>
      </ContentsWrapper>
    </Wrapper>
  )
}

export default memo(Card)
