import { FC } from 'react'

import type { TArticle } from '@/spec'
import IconButton from '@/components/Buttons/IconButton'

import { Wrapper, Hint } from '../../styles/digest_view/active_badge'

type TProps = {
  item: TArticle
}

const ActiveBadge: FC<TProps> = ({ item }) => {
  const isArchived = item.commentsCount === 24
  const path = isArchived ? 'article/archived.svg' : 'shape/activity.svg'

  return (
    <Wrapper hasComments={item.commentsCount > 0}>
      <IconButton
        path={path}
        size={14}
        hint={<Hint>最后回复: 2020-03-11 14:33</Hint>}
        mRight={6}
        hintPlacement="bottom"
        hintDelay={0}
      />
      <div>4天前</div>
    </Wrapper>
  )
}

export default ActiveBadge
