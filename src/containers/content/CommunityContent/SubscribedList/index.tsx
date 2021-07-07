/*
 * User subscribed communities list
 */

import { FC, memo, Fragment, useState } from 'react'

import type { TCommunity } from '@/spec'
import { ICON } from '@/config'
import { buildLog } from '@/utils'

import DotDivider from '@/components/DotDivider'
import Tooltip from '@/components/Tooltip'
import { Br, SpaceGrow } from '@/components/Common'

import ItemMenu from './ItemMenu'
import ExpandButton from './ExpandButton'

import {
  Wrapper,
  Item,
  Logo,
  Title,
  HeadTitle,
  HeadNum,
  Option,
  OptionIcon,
} from '../styles/subscribed_list'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityContent')

type TProps = {
  communities: TCommunity[]
}

const SubscribedList: FC<TProps> = ({ communities }) => {
  const [expand, setExpand] = useState(false)

  return (
    <Wrapper>
      <Br top={6} />
      <HeadTitle>
        <span>我的关注</span> <DotDivider radius={3} space={7} />
        <HeadNum>{communities.length}</HeadNum>
      </HeadTitle>
      <Br top={24} />
      <Item>
        <Logo src={`${ICON}/shape/home.svg`} />
        首页
      </Item>
      {communities.slice(0, 15).map((community) => (
        <Fragment key={community.id}>
          <Item>
            <Logo src={community.logo} />
            <Title>{community.title}</Title>
            <SpaceGrow />
            <Tooltip
              content={<ItemMenu community={community} />}
              placement="bottom"
              hideOnClick={false}
              trigger="click"
              noPadding
            >
              <Option>
                <OptionIcon src={`${ICON}/shape/more.svg`} />
              </Option>
            </Tooltip>
          </Item>
        </Fragment>
      ))}
      <ExpandButton isExpanded={expand} onClick={() => setExpand(!expand)} />
    </Wrapper>
  )
}

export default memo(SubscribedList)
