/*
 *
 * CommunityContent
 *
 */

import { FC, memo, Fragment } from 'react'

import type { TCommunity } from '@/spec'
import { buildLog } from '@/utils'

import {
  Wrapper,
  SubItem,
  SubIcon,
  SubTitle,
  ItemDivider,
} from './styles/subscribed_list'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityContent')

type TProps = {
  communities: TCommunity[]
}

const SubscribedList: FC<TProps> = ({ communities }) => {
  return (
    <Wrapper>
      <SubTitle>我的订阅</SubTitle>
      <ItemDivider />
      <SubItem>首页</SubItem>
      {communities.map((community) => (
        <Fragment key={community.id}>
          <SubItem>
            <SubIcon src={community.logo} />
            {community.title}
          </SubItem>
        </Fragment>
      ))}
    </Wrapper>
  )
}

export default memo(SubscribedList)
