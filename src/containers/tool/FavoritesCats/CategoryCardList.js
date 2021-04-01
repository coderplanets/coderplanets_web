import React from 'react'

import { cutRest } from '@/utils'

import Folder from '@/components/Folder'
import Pagi from '@/components/Pagi'

import { Wrapper, CardListWrapper } from './styles/category_card_list'

import { loadCategories, switchToUpdater } from './logic'

const CategoryCardList = ({
  data: { entries, pageNumber, pageSize, totalCount },
  onSelect,
}) => (
  <Wrapper>
    <CardListWrapper>
      {entries.map((cat) => (
        <Folder
          key={cat.id}
          title={cutRest(cat.title, 10)}
          desc={cutRest(cat.desc, 20)}
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

export default React.memo(CategoryCardList)
