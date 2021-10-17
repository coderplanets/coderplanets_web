import { FC, memo } from 'react'
import { keys } from 'ramda'

// import type { TTag } from '@/spec'
import { groupByKey } from '@/utils/helper'

import { LavaLampLoading } from '@/components/dynamic'
import CustomScroller from '@/components/CustomScroller'

import type { TTagView, TTagsList } from '../spec'
import { TAG_VIEW } from '../constant'

import Creator from './Creator'
import GroupTags from './GroupTags'
import { Wrapper, InnerWrapper } from '../styles/tag_setter/body'

type TProps = {
  view: TTagView
  tagsList: TTagsList
}

const Body: FC<TProps> = ({ view, tagsList }) => {
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
      const { tags, loading } = tagsList
      const groupedTags = groupByKey(tags, 'group')
      const tagFolders = keys(groupedTags) as string[]

      if (loading) {
        return (
          <Wrapper>
            <LavaLampLoading />
          </Wrapper>
        )
      }

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
