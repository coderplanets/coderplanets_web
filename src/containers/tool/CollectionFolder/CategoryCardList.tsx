import { FC, memo } from 'react'

import type { TCollectionFolder, TPagedCollectionFolder } from '@/spec'
import { cutRest } from '@/utils'

import Folder from '@/components/Folder'
import Pagi from '@/components/Pagi'

import { Wrapper, CardListWrapper } from './styles/category_card_list'
import { loadCategories, switchToUpdater } from './logic'

type TProps = {
  onSelect: (collection: TCollectionFolder) => void
  data: TPagedCollectionFolder
}

const CategoryCardList: FC<TProps> = ({
  data: { entries, pageNumber, pageSize, totalCount },
  onSelect,
}) => {
  return (
    <Wrapper>
      <CardListWrapper>
        {entries.map((cat) => (
          <Folder
            key={cat.id}
            title={cutRest(cat.title, 10)}
            total={cat.totalCount}
            updatedAt={cat.updatedAt}
            onEdit={() => switchToUpdater(cat)}
            onSelect={() => onSelect(cat)}
            editable
          />
        ))}
      </CardListWrapper>

      <Pagi
        margin={{ left: '-20px' }}
        pageNumber={pageNumber}
        pageSize={pageSize}
        totalCount={totalCount}
        onChange={loadCategories}
      />
    </Wrapper>
  )
}

export default memo(CategoryCardList)
