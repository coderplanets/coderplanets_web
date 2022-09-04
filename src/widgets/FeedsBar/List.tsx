/*
 *
 * List
 *
 */

import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils/logger'

import CustomScroller from '@/widgets/CustomScroller'
import { SpaceGrow } from '@/widgets/Common'

import { mockList } from './mock'

import {
  ListItemWrapper,
  Header,
  Icon,
  InfoIcon,
  Timestamp,
  Title,
} from './styles/list'

/* eslint-disable-next-line */
const log = buildLog('w:FeedsBar:index')

const List: FC = () => {
  // list header(with lable) - 40px
  // source select - 75px
  const listHeadHeight = '105px'
  const items = mockList()

  return (
    <CustomScroller
      direction="vertical"
      height={`calc(90vh - ${listHeadHeight})`}
      autoHide
    >
      {items.map((item) => (
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

export default memo(List)
