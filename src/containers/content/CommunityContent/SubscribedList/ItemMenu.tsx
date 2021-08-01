/*
 *
 * CommunityContent
 *
 */

import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

import { Wrapper, Item, Icon, Title } from '../styles/subscribed_list/item_menu'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityContent')

type TProps = {
  community: TCommunity
}

const ItemMenu: FC<TProps> = ({ community }) => {
  return (
    <Wrapper>
      <Item>
        <Icon src={`${ICON}/article/pin.svg`} />
        <Title>置顶</Title>
      </Item>
      <Item>
        <Icon src={`${ICON}/article/notify-off.svg`} />
        <Title>取消关注</Title>
      </Item>
    </Wrapper>
  )
}

export default memo(ItemMenu)
