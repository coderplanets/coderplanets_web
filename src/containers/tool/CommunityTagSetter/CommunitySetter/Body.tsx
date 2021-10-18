import { FC, memo } from 'react'
import { isEmpty } from 'ramda'

import type { TCommunity } from '@/spec'
import CustomScroller from '@/components/CustomScroller'
import NoticeBar from '@/components/NoticeBar'
import { LavaLampLoading } from '@/components/dynamic'

import type { TCommunitiesList } from '../spec'
import SearchBox from './SearchBox'
import List from './List'

import { Wrapper, InnerWrapper, NoticeWrapper } from '../styles/tag_setter/body'

type TProps = {
  communitiesList: TCommunitiesList
  onCommunitySelect: (community: TCommunity, select: boolean) => void
}

const Body: FC<TProps> = ({ communitiesList, onCommunitySelect }) => {
  const {
    canActOnSeleted,
    searching,
    searchValue,
    searchedCommunities,
    commonUsedCommunities,
    selectedCommunities,
  } = communitiesList

  return (
    <Wrapper>
      <InnerWrapper>
        <SearchBox searchValue={searchValue} />

        <NoticeWrapper>
          <NoticeBar
            type="notice"
            content="内测阶段所有人均可发布内容到首页。若测试请发布到「黑洞」。发布恶俗/恶意内容到社区，账号本身将进入「黑洞」，谢谢理解。"
            noBg
          />
        </NoticeWrapper>

        <CustomScroller
          direction="vertical"
          height="250px"
          showShadow={false}
          autoHide={false}
        >
          {!isEmpty(selectedCommunities) && (
            <List
              title="目标社区"
              communities={selectedCommunities}
              canActOnSeleted={canActOnSeleted}
              onCommunitySelect={onCommunitySelect}
              highlightTitle
              allChecked
            />
          )}

          {searching && <LavaLampLoading size="small" />}

          {isEmpty(searchValue) && (
            <List
              title="常用社区"
              communities={commonUsedCommunities}
              onCommunitySelect={onCommunitySelect}
            />
          )}
          {!searching &&
            !isEmpty(searchValue) &&
            !isEmpty(searchedCommunities) && (
              <List
                title="找到社区"
                communities={searchedCommunities}
                onCommunitySelect={onCommunitySelect}
              />
            )}
        </CustomScroller>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(Body)
