import { FC, memo } from 'react'

import type { TPagedWorks } from '@/spec'
import { mockWorks } from '@/utils/mock'
import WorksCard from '@/widgets/Cards/WorksCard'
import Tooltip from '@/widgets/Tooltip'

import { Wrapper, Title, List, Item, Cover } from './styles/works_badge'

type TProps = {
  works: TPagedWorks
}

const WorksBadge: FC<TProps> = ({ works }) => {
  const fakeWorks = {
    ...works,
    entries: [mockWorks()],
  }

  const { entries } = fakeWorks

  return (
    <Wrapper>
      <Title>作品</Title>
      <List>
        {entries.map((item) => (
          <Item key={item.id}>
            <Tooltip
              content={<WorksCard item={item} />}
              placement="top-start"
              noPadding
            >
              <Cover src={item.cover} />
            </Tooltip>
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}

export default memo(WorksBadge)
