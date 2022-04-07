/*
 *
 * GtdItem
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import GTDBadge from '@/widgets/GTDBadge'
import Upvote from '@/widgets/Upvote'
import TagsList from '@/widgets/TagsList'

import {
  Wrapper,
  UpvoteWrapper,
  LabelsWrapper,
  TagsWrapper,
  Title,
  Desc,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:GtdItem:index')

type TProps = {
  testid?: string
}

const GtdItem: FC<TProps> = ({ testid = 'gtd-item' }) => {
  const tags = [
    {
      title: 'cocos',
      raw: 'raw',
      color: 'yellow',
    },
  ]

  return (
    <Wrapper testid={testid}>
      <UpvoteWrapper>
        <Upvote count={7} type="comment" />
      </UpvoteWrapper>
      <Title>
        如何看待俄航天局长称「美国正研究将俄罗斯排除出 GPS
        卫星导航系统，俄有格洛纳斯系统无需紧张」
      </Title>
      <Desc>
        当地时间19日，俄罗斯航天局局长罗戈津表示美国正在，美国正在研究将俄罗斯排除出GPS卫星导航系统的问题
      </Desc>
      <LabelsWrapper>
        <GTDBadge type="FEATURE" right={10} />
        <TagsWrapper>
          <TagsList items={tags} mLeft={3} />
        </TagsWrapper>
      </LabelsWrapper>

      {/* <Footer> */}
      {/* <Author>
          <Avatar src={mockImage()} />
          <Name>mydearxym</Name>
        </Author>
        <div>3 天前</div> */}
      {/* </Footer> */}
    </Wrapper>
  )
}

export default memo(GtdItem)
