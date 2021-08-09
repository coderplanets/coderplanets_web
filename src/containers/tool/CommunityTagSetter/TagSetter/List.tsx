import { FC, memo } from 'react'
import { keys } from 'ramda'

import type { TTag } from '@/spec'
import { groupByKey } from '@/utils/helper'

import { mockTags } from '@/utils/mock'

import type { TView } from '../spec'
import GroupTags from './GroupTags'
import { Wrapper, InnerWrapper } from '../styles/tag_setter/list'

type TProps = {
  view: TView
  withDelete: boolean
  withSelect: boolean
}

const List: FC<TProps> = ({ withDelete = false, withSelect = false, view }) => {
  switch (view) {
    case 'do-create': {
      return (
        <Wrapper>
          <InnerWrapper>do create</InnerWrapper>
        </Wrapper>
      )
    }

    case 'do-update': {
      return (
        <Wrapper>
          <InnerWrapper>do update</InnerWrapper>
        </Wrapper>
      )
    }

    default: {
      const allTags = mockTags(16)
      const groupedTags = groupByKey(allTags, 'group')
      const tagFolders = keys(groupedTags) as string[]

      return (
        <Wrapper>
          <InnerWrapper>
            {tagFolders.map((folder) => (
              <GroupTags
                key={folder}
                view={view}
                tags={groupedTags[folder]}
                folder={folder}
              />
            ))}
          </InnerWrapper>
        </Wrapper>
      )
    }
  }
}

export default memo(List)
