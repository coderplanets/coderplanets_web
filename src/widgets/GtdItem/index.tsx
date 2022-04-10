/*
 *
 * GtdItem
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'
import { mockUsers } from '@/utils/mock'

import IconButton from '@/widgets/Buttons/IconButton'
import GTDBadge from '@/widgets/GTDBadge'
import Upvote from '@/widgets/Upvote'
import TagsList from '@/widgets/TagsList'

import { Wrapper, Header, Footer, Title, Desc } from './styles'

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
      <Header>
        <TagsList items={tags} mLeft={2} />
        <IconButton path="shape/more.svg" mRight={0} />
      </Header>
      <Title>
        如何看待俄航天局长称「美国正研究将俄罗斯排除出 GPS
        卫星导航系统，俄有格洛纳斯系统无需紧张」
      </Title>
      <Desc>
        当地时间19日，俄罗斯航天局局长罗戈津表示美国正在，美国正在研究将俄罗斯排除出GPS卫星导航系统的问题
      </Desc>
      <Footer>
        <Upvote count={3} avatarList={mockUsers(3)} />
        <GTDBadge type="FEATURE" noBg />
        {/* <Author>
          <Avatar src={mockImage()} />
          <Name>mydearxym</Name>
        </Author> */}
      </Footer>
    </Wrapper>
  )
}

export default memo(GtdItem)
