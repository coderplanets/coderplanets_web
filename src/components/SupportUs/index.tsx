/*
 *
 * FriendsContent
 *
 */

import { FC, memo } from 'react'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { Br } from '@/components/Common'
import ArrowLink from '@/components/Buttons/ArrowLink'

import Blocks from './Blocks'

import {
  Wrapper,
  InnerWrapper,
  Title,
  Divider,
  Desc,
  FocusDesc,
} from './styles'

type TProps = {
  metric?: TMetric
}

const SupportUS: FC<TProps> = ({ metric = METRIC.SUPPORT_US }) => {
  return (
    <Wrapper testid="support-us-content">
      <InnerWrapper metric={metric}>
        <Title>支持我们</Title>
        <Divider />
        <Desc align>
          {/* eslint-disable-next-line */}
          编写一个功能完善的现代社区需要开发者保持长期的专注和付出，论坛的持续打磨和维护，更需要团队投入海量的精力，矛盾的是，现阶段因为缺乏流量等各种资源，难以通过自身造血实现正向循环。你的支持将有助于我们保持独立，在论坛的开发和维护上投入更多时间。
        </Desc>
        <Br top={80} />
        <Blocks />
        <Br top={60} />

        <Desc>
          开源项目的健康发展无法仅靠情怀支撑，所受钱款将全部用于支付本站所使用的基础设施、第三方服务、开发人员生计等产生的必要费用，确保社区健壮、稳定、可持续。
        </Desc>
        <Br top={20} />
        <Desc>
          最后，如果你喜欢这里，还请高抬贵指将本社区转发给你身边的开发者朋友、氛围良好的交流群中，
          <FocusDesc>Don’t tell me , tell the world ~</FocusDesc>
        </Desc>
      </InnerWrapper>
    </Wrapper>
  )
}

export default SupportUS
