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
}

const Body: FC<TProps> = ({ view }) => {
  const allCommunities = mockCommunities(5)

  return (
    <Wrapper>
      <InnerWrapper>
        <SearchBox />

        <NoticeWrapper>
          <NoticeBar
            type="notice"
            content="内侧阶段所有人均可发布内容到首页。若仅测试请发布到黑洞社区。恶意发布社区将对你变为只读，谢谢理解。"
          />
        </NoticeWrapper>

        <CustomScroller
          direction="vertical"
          height="350px"
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
