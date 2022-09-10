import { FC, memo } from 'react'
import { isEmpty, filter } from 'ramda'

import type { TCommunity, TCommunitySetterStyle } from '@/spec'
import { Br } from '@/widgets/Common'
import CustomScroller from '@/widgets/CustomScroller'
import NoticeBar from '@/widgets/NoticeBar'
import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'

import type { TCommunitiesList, TTexts } from '../spec'
import SearchBox from './SearchBox'
import List from './List'

import { Wrapper, InnerWrapper } from '../styles/tag_setter/body'

type TProps = {
  texts: TTexts
  communitiesList: TCommunitiesList
  communityStyle: TCommunitySetterStyle
  onCommunitySelect: (community: TCommunity, select: boolean) => void
}

const isValid = (communities: TCommunity[]): boolean => {
  return filter((c) => !!c.raw, communities).length !== 0
}

const Body: FC<TProps> = ({
  texts,
  communitiesList,
  onCommunitySelect,
  communityStyle,
}) => {
  const {
    canActOnSeleted,
    searching,
    searched,
    searchValue,
    searchedCommunities,
    commonUsedCommunities,
    selectedCommunities,
  } = communitiesList

  return (
    <Wrapper>
      <InnerWrapper>
        <SearchBox searchValue={searchValue} texts={texts} />
        {texts.notice ? (
          <NoticeBar type="notice" content={texts.notice} bottom={5} noBg />
        ) : (
          <Br bottom={0}>&nbsp;</Br>
        )}

        <CustomScroller
          direction="vertical"
          height="250px"
          showShadow={false}
          autoHide={false}
        >
          {isValid(selectedCommunities) && (
            <List
              title="目标社区"
              communities={selectedCommunities}
              canActOnSeleted={canActOnSeleted}
              onCommunitySelect={onCommunitySelect}
              communityStyle={communityStyle}
              highlightTitle
              allChecked
            />
          )}

          {searching && <LavaLampLoading size="small" />}
          {searched && isEmpty(searchedCommunities) && (
            <NoticeBar
              type="notice"
              content={texts.notFoundHint}
              top={-15}
              bottom={20}
              noBg
            />
          )}

          {isEmpty(searchValue) && (
            <List
              title={texts.commonUsedHint}
              communityStyle={communityStyle}
              communities={commonUsedCommunities}
              onCommunitySelect={onCommunitySelect}
            />
          )}
          {!searching &&
            !isEmpty(searchValue) &&
            !isEmpty(searchedCommunities) && (
              <List
                title="找到相关"
                communityStyle={communityStyle}
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
