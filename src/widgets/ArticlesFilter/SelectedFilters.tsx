import { FC, memo } from 'react'
import { keys } from 'ramda'

import type { TArticleFilter } from '@/spec'
import { isEmptyValue } from '@/utils/validator'

import Tag from '@/widgets/Tag'
import { Wrapper, TagWrapper } from './styles/selected_filters'

const filterDict = {
  TODAY: '今天',
  THIS_WEEK: '本周',
  THIS_MONTH: '本月',
  THIS_YEAR: '今年',
  MOST_FAVORITES: '最多收藏',
  MOST_STARS: '最多点赞',
  MOST_VIEWS: '最多浏览',
  MOST_COMMENTS: '最多讨论',
  MOST_WORDS: '字数最多',
  LEAST_WORDS: '字数最少',
  // repo
  MOST_GITHUB_STAR: '最多Star',
  MOST_GITHUB_FORK: '最多Fork',
  MOST_GITHUB_WATCH: '最多Watch',
  //
  TRUE: '已读',
  READ: '只显已读',
  UNREAD: '只显未读',
}

type TFilterTag = {
  onSelect: (filter: TArticleFilter) => void
  active: string
  type: string
}

const FilterTag: FC<TFilterTag> = ({ onSelect, active, type }) => {
  return (
    !isEmptyValue(active) && (
      <TagWrapper>
        <Tag onClose={() => onSelect({ [type]: '' })}>
          {filterDict[active] || active}
        </Tag>
      </TagWrapper>
    )
  )
}

type TProps = {
  onSelect: (filter: Record<string, string>) => void
  activeFilter: TArticleFilter
}

const SelectedFilters: FC<TProps> = ({ activeFilter, onSelect }) => (
  <Wrapper>
    {keys(activeFilter).map((filterKey) => (
      <FilterTag
        key={filterKey}
        onSelect={onSelect}
        active={activeFilter[filterKey]}
        type={filterKey}
      />
    ))}
  </Wrapper>
)

export default memo(SelectedFilters)
