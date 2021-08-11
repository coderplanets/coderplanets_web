import { FC, memo } from 'react'
import { keys } from 'ramda'

// import type { TTag } from '@/spec'
import { groupByKey } from '@/utils/helper'
import { mockTags } from '@/utils/mock'

import CustomScroller from '@/components/CustomScroller'

import type { TTagView } from '../spec'
import { TAG_VIEW } from '../constant'

import Creator from './Creator'
import GroupTags from './GroupTags'
import { Wrapper, InnerWrapper } from '../styles/tag_setter/body'

type TProps = {
  view: TTagView
}

const Body: FC<TProps> = ({ view }) => {
  switch (view) {
    case TAG_VIEW.CREATE_ITEM: {
      return (
        <Wrapper>
          <InnerWrapper>
            <Creator />
          </InnerWrapper>
        </Wrapper>
      )
    }

    case TAG_VIEW.UPDATE_ITEM: {
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
            <CustomScroller
              direction="vertical"
              height="360px"
              showShadow={false}
              autoHide={false}
            >
              {tagFolders.map((folder) => (
                <GroupTags
                  key={folder}
                  view={view}
                  tags={groupedTags[folder]}
                  folder={folder}
                />
              ))}
            </CustomScroller>
          </InnerWrapper>
        </Wrapper>
      )
    }
  }
}

export default memo(Body)
