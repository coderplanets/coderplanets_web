import { FC, memo } from 'react'

// import type { TTag } from '@/spec'
import { mockCommunities } from '@/utils/mock'

import CustomScroller from '@/components/CustomScroller'
import NoticeBar from '@/components/NoticeBar'

import type { TCommunityView } from '../spec'
import SearchBox from './SearchBox'
import CommonUsedCommunities from './CommonUsedCommunities'

import { Wrapper, InnerWrapper, NoticeWrapper } from '../styles/tag_setter/body'

type TProps = {
  view: TCommunityView
  searchValue: string
}

const Body: FC<TProps> = ({ view, searchValue }) => {
  const allCommunities = mockCommunities(5)

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
          <CommonUsedCommunities view={view} communities={allCommunities} />
        </CustomScroller>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(Body)
