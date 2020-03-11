import React from 'react'
import R from 'ramda'
import { Tag } from 'antd'

import { isEmptyValue } from '@utils'
import { Wrapper, TagWrapper } from './styles/selected_tags'

const filterDict = {
  TODAY: '今天',
  THIS_WEEK: '本周',
  THIS_MONTH: '本月',
  THIS_YEAR: '今年',
  MOST_FAVORITES: '最多收藏',
  MOST_STARS: '最多点赞',
  MOST_VIEWS: '最多浏览',
  MOST_COMMENTS: '最多评论',
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

const FilterTag = ({ onSelect, active, type }) =>
  isEmptyValue(active) ? null : (
    <TagWrapper>
      <Tag closable onClose={onSelect.bind(this, { [type]: '' })}>
        {filterDict[active] || active}
      </Tag>
    </TagWrapper>
  )

const SelectedTags = ({ onSelect, activeFilter }) => (
  <Wrapper>
    {R.keys(activeFilter).map(filterKey => (
      <FilterTag
        key={filterKey}
        onSelect={onSelect}
        active={activeFilter[filterKey]}
        type={filterKey}
      />
    ))}
  </Wrapper>
)

export default React.memo(SelectedTags)
