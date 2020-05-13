/*
 *
 * List
 *
 */

import React from 'react'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

import CustomScroller from '@/components/CustomScroller'
import { SpaceGrow } from '@/components/Common'

import fakeSourceList from './fakeSourceList'

import {
  ListItemWrapper,
  Header,
  Icon,
  InfoIcon,
  Timestamp,
  Title,
} from './styles/list'

/* eslint-disable-next-line */
const log = buildLog('c:FeedsBar:index')

const List = () => {
  // list header(with lable) - 40px
  // source select - 75px
  const listHeadHeight = '115px'

  return (
    <CustomScroller
      direction="vertical"
      height={`calc(90vh - ${listHeadHeight})`}
      autoHide
    >
      {fakeSourceList.map(item => (
        <ListItemWrapper key={item.id}>
          <Header>
            <Icon src={item.icon} />
            {item.source}
            <InfoIcon src={`${ICON_CMD}/hot/info.svg`} />
            <SpaceGrow />
            <Timestamp>{item.createdAt}</Timestamp>
          </Header>
          <Title>{item.title}</Title>
        </ListItemWrapper>
      ))}
    </CustomScroller>
  )
}

export default React.memo(List)
