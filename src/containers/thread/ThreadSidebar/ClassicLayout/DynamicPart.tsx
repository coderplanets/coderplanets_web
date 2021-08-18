/*
 *
 * ClassicSidebar
 * common sidebar include community badge, publisher, tagsbar ads .. etc,
 * used for classic layout
 *
 */

import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils/logger'
import { mockFilterMenuTags } from '@/utils/mock'

import Sticky from '@/components/Sticky'
import FiltersMenu from '@/components/FiltersMenu'
import PublishButton from '@/components/Buttons/PublishButton'
import CommunityJoinBadge from '@/containers/tool/CommunityJoinBadge'
import TagsBar from '@/containers/unit/TagsBar'
// import PromotionList from '@/components/PromotionList'

import type { TBaseProps } from '../index'

import {
  BadgeWrapper,
  TagsBarWrapper,
  PublishWrapper,
} from '../styles/classic_layout'
import { onCreate } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('c:ClassicSidebar')

type TProps = { showCommunityBadge: boolean } & TBaseProps

const filtersItems = [
  {
    id: '0',
    title: '城市',
    icon: `${ICON_CMD}/navi/location.svg`,

    options: [
      {
        id: '0',
        title: '全部',
      },
      {
        id: '1',
        title: '北京',
      },
      {
        id: '2',
        title: '长三角',
      },
      {
        id: '3',
        title: '珠三角',
      },
      {
        id: '6',
        title: '武汉',
      },
      {
        id: '7',
        title: '成都',
      },
      {
        id: '8',
        title: '厦门',
      },
      {
        id: '20',
        title: '海外',
      },
      {
        id: '21',
        title: '远程',
      },
      {
        id: '22',
        title: '其他',
      },
    ],
  },
  {
    id: '21',
    title: '职位',
    icon: `${ICON_CMD}/navi/topic.svg`,

    options: [
      {
        id: '22',
        title: '全部',
      },
      {
        id: '1',
        title: 'web 前端',
      },
      {
        id: '2',
        title: '后端开发',
      },
      {
        id: '3',
        title: '移动端',
      },
      {
        id: '4',
        title: '人工智能',
      },
      {
        id: '5',
        title: '运维&安全',
      },
      {
        id: '6',
        title: 'DBA',
      },
    ],
  },
  {
    id: '102',
    title: '薪资',
    icon: `${ICON_CMD}/navi/money-yuan.svg`,

    options: [
      {
        id: '0',
        title: '全部',
      },
      {
        id: '1',
        title: '0 - 10k',
      },
      {
        id: '2',
        title: '10k - 20k',
      },
      {
        id: '3',
        title: '20k - 40k',
      },
      {
        id: '4',
        title: '40k以上',
      },
      {
        id: '5',
        title: '面谈',
      },
    ],
  },
]

const ClassicLayout: FC<TProps> = ({
  showCommunityBadge,
  onTagSelect,
  onAdsClose,
}) => {
  return (
    <Sticky offsetTop={50}>
      <PublishWrapper show={showCommunityBadge}>
        <PublishButton onCreate={onCreate} />
      </PublishWrapper>
      <BadgeWrapper show={!showCommunityBadge}>
        <CommunityJoinBadge />
      </BadgeWrapper>
      <TagsBarWrapper>
        {/* <TagsBar onSelect={onTagSelect} /> */}
        <FiltersMenu tags={mockFilterMenuTags()} revert />
      </TagsBarWrapper>
      {/* <PromotionList onClose={onAdsClose} /> */}
    </Sticky>
  )
}

export default memo(ClassicLayout)
